import Prism from 'prismjs';

export async function processRegex(code) {
  await import('prismjs/components/prism-regex.min.js');
  function regex(code) {
    return Prism.highlight(code, Prism.languages.regex, 'regex');
  }

  let r = /<span class="token regex-source language-regex">(.+?)?<\/span>/gm;
  let m = code.match(r);
  if (code.match(r)) for (let match of m) code = code.replace(r, regex(match.split(r)[1]));
  return code;
}

export function postProcessComment(comment) {
  comment = comment.replaceAll(/\*{2}.+?\*{2}/gm, match => `<b>${match.slice(2, match.length-2)}</b>`); // replace to bold
  comment = comment.replaceAll(/_{2}.+?_{2}/gm, match => `<u>${match.slice(2, match.length-2)}</u>`); // replace to underline
  comment = comment.replaceAll(/-{2}.+?-{2}/gm, match => `<i>${match.slice(2, match.length-2)}</i>`); // replace to italic
  comment = comment.replaceAll(/\^{2}.+?\^{2}/gm, match => `<sup>${match.slice(2, match.length-2)}</sup>`); // replace to sup
  return comment;
}