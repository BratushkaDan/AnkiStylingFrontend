import Prism from 'prismjs'

import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-scss.min.js';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-json.min.js';

import processRegex from './processRegex.js'

const highlight = (language, code) => {
  if (language !== 'html') code = code.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  const html = Prism.highlight(code, Prism.languages[language], language)
  return `<div class="code_container ${language}"><pre>${html}</pre></div>`;
}

const highlightRegex = (language, code) => {
  let html = Prism.highlight(code, Prism.languages[language], language)
  html = `<div class="code_container ${language}"><pre>${html}</pre></div>`
  html = processRegex(html)
  return html;
}

export const comment = text => {
  let result = '';

  for (let str of text.split('\n')) result += str + '<br>';

  return `<div class="comment"><div>${result}</div></div>`
}

export const html = code => highlight('html', code)
export const css = code => highlight('css', code)
export const javascript = code => highlightRegex('javascript', code)
export const react = code => {
  let html = Prism.highlight(code, Prism.languages.jsx, 'jsx');
  html = `<div class="code_container javascript"><pre>${html}</pre></div>`;
  return html;
}
export const typescript = code => {
  let html = Prism.highlight(code, Prism.languages.typescript, 'typescript');
  html = `<div class="code_container javascript"><pre>${html}</pre></div>`;
  return html;
}
export const scss = code => {
  let html = Prism.highlight(code, Prism.languages.scss, 'scss')
  html = `<div class="code_container css"><pre>${html}</pre></div>`
  return html;
}
export const json = code => highlight('json', code);
// export const python = async () => {
//   await import('prismjs/components/prism-python.min.js')
//   highlight('python')
// }
//
// export const rust = async () => {
//   await import('prismjs/components/prism-rust.min.js')
//   highlight('rust')
// }
//
// export const cs = async () => {
//   await import('prismjs/components/prism-csharp.min.js')
//   highlight('cs')
// }
// export const mongo = async () => {
//   await import('prismjs/components/prism-mongodb.min.js')
//   let code = clipboardy.readSync()
//   let html = Prism.highlight(code, Prism.languages.mongodb, 'MongoDB')
//   html = `<div class="code_container mongo"><pre>${html}</pre></div>`
//   clipboardy.write(html)
// }
//
// export const less = async () => {
//   await import('prismjs/components/prism-less.min.js')
//   let code = clipboardy.readSync()
//   let html = Prism.highlight(code, Prism.languages.less, 'less')
//   html = `<div class="code_container css"><pre>${html}</pre></div>`
//   clipboardy.write(html)
// }

// export const sass = async () => {
//   await import('prismjs/components/prism-sass.min.js')
//   let code = clipboardy.readSync()
//   let html = Prism.highlight(code, Prism.languages.sass, 'sass')
//   html = `<div class="code_container css"><pre>${html}</pre></div>`
//   clipboardy.write(html)
// }
//
// export const c = async () => {
//   await import('prismjs/components/prism-c.min.js')
//   highlight('c')
// }
//
// export const cpp = async () => {
//   await import ('prismjs/components/prism-c.min.js')
//   await import('prismjs/components/prism-cpp.min.js')
//   let code = clipboardy.readSync()
//   let html = Prism.highlight(code, Prism.languages.cpp, 'cpp')
//   html = `<div class="code_container c"><pre>${html}</pre></div>`
//   clipboardy.write(html)
// }
//
// export const cmake = async () => {
//   await import('prismjs/components/prism-cmake.min.js')
//   let code = clipboardy.readSync()
//   let html = Prism.highlight(code, Prism.languages.cmake, 'cmake')
//   html = `<div class="code_container c"><pre>${html}</pre></div>`
//   clipboardy.write(html)
// }
//
// export const kotlin = async () => {
//   await import('prismjs/components/prism-kotlin.min.js')
//   let code = clipboardy.readSync();
//   let html = Prism.highlight(code, Prism.languages.kotlin, 'kotlin');
//   html = `<div class="code_container java"><pre>${html}</pre></div>`;
//   clipboardy.write(html);
// }
//
// export const sql = async () => {
//   await import('prismjs/components/prism-sql.min.js')
//   let code = clipboardy.readSync();
//   let html = Prism.highlight(code, Prism.languages.sql, 'sql');
//   html = `<div class="code_container SQL"><pre>${html}</pre></div>`;
//   clipboardy.write(html);
// }
//
// export const bash = async () => {
//   await import('prismjs/components/prism-bash.min.js')
//   highlight('bash')
// }
//
// export const elm = async () => {
//   await import('prismjs/components/prism-elm.min.js')
//   highlight('elm')
// }
//
// export const dart = async () => {
//   await import('prismjs/components/prism-dart.min.js')
//   highlight('dart')
// }
//
// export const graphql = async () => {
//   await import('prismjs/components/prism-graphql.min.js')
//   highlight('graphql')
// }
//
// export const java = async () => {
//   await import('prismjs/components/prism-java.min.js')
//   highlight('java')
// }
// export const vim = async () => {
//   await import('prismjs/components/prism-vim.min.js')
//   highlight('vim')
// }
//
// export const swift = async () => {
//   await import('prismjs/components/prism-swift.min.js')
//   highlight('swift')
// }
