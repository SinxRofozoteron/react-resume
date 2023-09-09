import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as prettier from 'prettier/standalone';
import prettierBabelPlugin from 'prettier/plugins/babel';
import prettierYamlPlugin from 'prettier/plugins/yaml';
import prettierEstreePlugin from 'prettier/plugins/estree';

import { getLanguageByFileName } from './CodeEditor.utils';

import { useSelector } from '@/src/hooks';
import { useLazyFetchFileQuery } from '@/src/state';

const languageParserMap = {
  typescript: 'babel-ts',
  json: 'json',
  yml: 'yaml',
  yaml: 'yaml',
  javascript: 'babel'
};

type FormattedData = {
  code: string;
  language: string | null;
};

export const useCodeFormatter = () => {
  const { query } = useRouter();
  const [formattedData, setFormattedData] = useState<FormattedData | null>(null);
  const [formatting, setFormatting] = useState<boolean>(false);

  const activeFile = useSelector(state => state.view.activeCodeEditorFile);
  const [fetchFile, { data, isFetching }] = useLazyFetchFileQuery();

  useEffect(() => {
    if (activeFile) {
      fetchFile({ repo: query.repo as string, filePath: activeFile }, true);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps --
     * no need to depend on fetchFile here
     **/
  }, [activeFile, query.repo]);

  useEffect(() => {
    setFormatting(true);

    // Since formatting is async we need a flag to indicate if formatting started
    let formatStarted = false;

    if (data && typeof window !== 'undefined') {
      const language = getLanguageByFileName(data.name);
      if (!language) {
        setFormattedData({ code: data.content, language: null });
      } else {
        const parser = languageParserMap[language];
        if (!parser) {
          setFormattedData({ code: data.content, language });
        } else {
          formatStarted = true;

          prettier
            .format(data.content, {
              parser,
              plugins: [prettierBabelPlugin, prettierYamlPlugin, prettierEstreePlugin]
            })
            .then(formatted => {
              setFormattedData({ code: formatted, language });
              setFormatting(false);
            })
            .catch(err => console.error(err));
        }
      }
    }
    if (!formatStarted) {
      setFormatting(false);
    }
  }, [data]);

  return {
    data: formattedData,
    processing: isFetching || formatting
  };
};
