import Prism from 'prismjs';

export default async function processRegex(code) {
  await import('prismjs/components/prism-regex.min.js');
  function regex(code) {
    return Prism.highlight(code, Prism.languages.regex, 'regex');
  }

  let r = /<span class="token regex-source language-regex">(.+?)?<\/span>/gm;
  let m = code.match(r);
  if (code.match(r)) for (let match of m) code = code.replace(r, regex(match.split(r)[1]));
  return code;
}