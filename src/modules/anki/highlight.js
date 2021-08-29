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


async function highlight(language, code, cssClassnameAlias = language) {
  const html = Prism.highlight(code, Prism.languages[language], language)
  return `<div class="cc ${cssClassnameAlias}"><pre>${html}</pre></div>`;
}

async function highlightRegex(...args) {
  let html = await highlight(...args);
  return processRegex(html);
}

export async function comment(text) {
  text = marked(text);
  return `<div class="com">${text}</div>`
}

export async function html(code) {
  return highlight('html', code);
}

export async function css(code) {
  return highlight('css', code);
}

export async function javascript(code) {
  return highlightRegex('javascript', code, 'js');
}

export async function react(code) {
  return highlightRegex('jsx', code, 'js');
}

export async function typescript(code) {
  return highlight('typescript', code, 'js')
}

export async function scss(code) {
  return highlight('scss', code, 'css')
}

export async function less(code) {
  return highlight('less', code, 'css');
}

// export async function sass(code) {
//   await import('prismjs/components/prism-sass.min.js');
//   return highlight('sass', code, 'css');
// }

export async function graphql(code) {
  return highlight('graphql', code, 'gql');
}

export async function json(code) {
  return highlight('json', code);
}

export async function python(code) {
  return highlight('python', code, 'py')
}

export async function rust(code) {
  return highlight('rust', code).then(code => code.replaceAll('::', '꞉꞉'));
}

export async function cs(code) {
  return highlight('cs', code);
}

export async function mongo(code) {
  return highlight('mongodb', code, 'mongo');
}

export async function c(code) {
  return highlight('c', code);
}

export async function cpp(code) {
  return highlight('cpp', code, 'c').then(code => code.replaceAll('::', '꞉꞉'));
}

export async function cmake(code) {
  return highlight('cmake', code, 'c');
}

export async function kotlin(code) {
  return highlight('kotlin', code, 'java');
}

export async function sql(code) {
  return highlight('sql', code);
}

export async function dart(code) {
  return highlight('dart', code);
}

export async function java(code) {
  return highlight('java', code);
}

export async function bash(code) {
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
