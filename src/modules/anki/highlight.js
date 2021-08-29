import Prism from 'prismjs'

import {processRegex} from './utils';
import marked from "marked";

import './mapPrismDefaultClassnames.js';

// LanguageHightlightModules
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-scss.min.js';
import 'prismjs/components/prism-less.min.js';
import 'prismjs/components/prism-graphql.min.js';
import 'prismjs/components/prism-json.min.js';
import 'prismjs/components/prism-python.min.js';
import 'prismjs/components/prism-rust.min.js';
import 'prismjs/components/prism-java.min.js';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-dart.min.js';
import 'prismjs/components/prism-sql.min.js';
import 'prismjs/components/prism-kotlin.min.js';
import 'prismjs/components/prism-cmake.min.js';
import 'prismjs/components/prism-c.min.js';
import 'prismjs/components/prism-cpp.min.js';
import 'prismjs/components/prism-mongodb.min.js';
import 'prismjs/components/prism-c.min.js';
import 'prismjs/components/prism-csharp.min.js';


function highlight(language, code, cssClassnameAlias = language) {
  const html = Prism.highlight(code, Prism.languages[language], language)
  return `<div class="cc ${cssClassnameAlias}"><pre>${html}</pre></div>`;
}

function highlightRegex(...args) {
  let html = highlight(...args);
  return processRegex(html);
}

export function comment(text) {
  text = marked(text);
  return `<div class="com">${text}</div>`
}

export function html(code) {
  return highlight('html', code);
}

export function css(code) {
  return highlight('css', code);
}

export function javascript(code) {
  return highlightRegex('javascript', code, 'js');
}

export function react(code) {
  return highlightRegex('jsx', code, 'js');
}

export function typescript(code) {
  return highlight('typescript', code, 'js')
}

export function scss(code) {
  return highlight('scss', code, 'css')
}

export function less(code) {
  return highlight('less', code, 'css');
}

// export async function sass(code) {
//   await import('prismjs/components/prism-sass.min.js');
//   return highlight('sass', code, 'css');
// }

export function graphql(code) {
  return highlight('graphql', code, 'gql');
}

export function json(code) {
  return highlight('json', code);
}

export function python(code) {
  return highlight('python', code, 'py')
}

export function rust(code) {
  return highlight('rust', code).replaceAll('::', '꞉꞉');
}

export function cs(code) {
  return highlight('cs', code);
}

export function mongo(code) {
  return highlight('mongodb', code, 'mongo');
}

export function c(code) {
  return highlight('c', code);
}

export function cpp(code) {
  return highlight('cpp', code, 'c').replaceAll('::', '꞉꞉');
}

export function cmake(code) {
  return highlight('cmake', code, 'c');
}

export function kotlin(code) {
  return highlight('kotlin', code, 'java');
}

export function sql(code) {
  return highlight('sql', code);
}

export function dart(code) {
  return highlight('dart', code);
}

export function java(code) {
  return highlight('java', code);
}

export function bash(code) {
  return highlight('bash', code);
}

//
// export async function elm(code) {
//   await import('prismjs/components/prism-elm.min.js');
//   return highlight('elm', code);
// }
// export async function vim(code) {
//   await import('prismjs/components/prism-vim.min.js');
//   return highlight('vim', code);
// }
//
// export async function swift(code) {
//   await import('prismjs/components/prism-swift.min.js');
//   return highlight('swift', code);
// }
