/* eslint-disable unicorn/filename-case */

// next/script doesn't play nicely with testing-library, script tags linger
// between tests through the DOM cleanup, probably due to some internal optimisations
import { DetailedHTMLProps, ScriptHTMLAttributes } from 'react';

const Script = (
  props: DetailedHTMLProps<
    ScriptHTMLAttributes<HTMLScriptElement>,
    HTMLScriptElement
  >
) => {
  return <script {...props} />;
};

export default Script;
