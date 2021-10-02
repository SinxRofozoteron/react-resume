import { OnChange as OnCodeEditorChange } from "@monaco-editor/react";

export interface IndividualSkill {
  name: string;
  isLink: boolean;
  value?: number;
}

export interface PhotoProps {
  imageLocation: string;
  alt: string;
}

export interface ThemeNotchProps {
  isActive: boolean;
}

export interface ThemeToggleProps extends ThemeNotchProps {
  onToggle: React.MouseEventHandler<HTMLDivElement>;
}

export interface ExperienceProps {
  companyName: string;
  location: string;
  position: string;
  dates: string; // from - to dates working at this position
  description: string[]; // list of sentances that describe main carier higlights at this position
  value?: number;
}

export interface CodeEditorProps {
  code: string;
  onChange?: OnCodeEditorChange;
  readOnly?: boolean;
}

export interface JSXHighlighterType {
  highLightOnDidChangeModelContent(
    debounceTime?: number,
    afterHighlight?: () => void,
    onHighlightError?: () => void,
    getAstPromise?: () => void | undefined,
    onParseAstError?: () => void
  ): void;
}
