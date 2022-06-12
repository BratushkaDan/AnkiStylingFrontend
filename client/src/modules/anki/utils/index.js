import Prism from 'prismjs';
import 'prismjs/components/prism-regex.min.js';

export function processRegex(code) {
  let r = /<span class="token regex-source language-regex">(.+?)?<\/span>/gm;
  let m = code.match(r);
  if (code.match(r)) for (let match of m) code = code.replace(r, Prism.highlight(match.split(r)[1], Prism.languages.regex, 'regex'));
  return code;
}