import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { SerializedError } from "@reduxjs/toolkit";

type GithubFetchReturn = {
  data?: string;
  error?: FetchBaseQueryError | SerializedError | undefined;
  isError: boolean;
  isLoading: boolean;
};
// function responsable for setting code Editor content
export function setEditorContent({
  data,
  error,
  isError,
  isLoading,
}: GithubFetchReturn) {
  let editorConetent: string;
  if (isLoading) {
    editorConetent = "// Fething file from GitHub ...";
  } else {
    if (isError) {
      editorConetent = `// An Error occured during process of fetching file from GitHub:\n`;
      editorConetent += JSON.stringify(error);
    } else {
      editorConetent = data!;
    }
  }
  return editorConetent;
}
