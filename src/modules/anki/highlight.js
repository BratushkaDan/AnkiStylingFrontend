import Prism from 'prismjs'

import {postProcessComment, processRegex} from './utils';

async function highlight(language, code, cssClassnameAlias = language) {
  const html = Prism.highlight(code, Prism.languages[language], language)
  return `<div class="code_container ${cssClassnameAlias}"><pre>${html}</pre></div>`;
}

async function highlightRegex(...args) {
  let html = await highlight(...args);
  return processRegex(html);
}

export async function comment(text) {
  text = text.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  let result = '';

  for (let str of text.split('\n')) result += str + '<br>';

  result = postProcessComment(result);

  return `<div class="comment"><div>${result}</div></div>`
}

export async function html(code) {
  return highlight('html', code);
}

export async function css(code) {
  return highlight('css', code);
}

export async function javascript(code) {
  return highlightRegex('javascript', code);
}

export async function react(code) {
  await import('prismjs/components/prism-jsx.min.js');
  return highlightRegex('jsx', code, 'javascript');
}

export async function typescript(code) {
  await import('prismjs/components/prism-typescript.min.js');
  return highlight('typescript', code, 'javascript')
}

export async function scss(code) {
  await import('prismjs/components/prism-scss.min.js');
  return highlight('scss', code, 'css')
}

export async function less(code) {
  await import('prismjs/components/prism-less.min.js');
  return highlight('less', code, 'css');
}

// export async function sass(code) {
//   await import('prismjs/components/prism-sass.min.js');
//   return highlight('sass', code, 'css');
// }

export async function graphql(code) {
  await import('prismjs/components/prism-graphql.min.js');
  return highlight('graphql', code);
}

export async function json(code) {
  await import('prismjs/components/prism-json.min.js');
  return highlight('json', code);
}

export async function python(code) {
  await import('prismjs/components/prism-python.min.js');
  return highlight('python', code)
}

export async function rust(code) {
  await import('prismjs/components/prism-rust.min.js');
          
  return highlight('rust', code).then(code => code.replaceAll('::', '꞉꞉'));
}

export async function cs(code) {
  await import('prismjs/components/prism-csharp.min.js');
  return highlight('cs', code);
}

export async function mongo(code) {
  await import('prismjs/components/prism-mongodb.min.js');
  return highlight('mongodb', code, 'mongo');
}

export async function c(code) {
  await import('prismjs/components/prism-c.min.js')
  return highlight('c', code);
}

export async function cpp(code) {
  await Promise.all([import('prismjs/components/prism-c.min.js'), import('prismjs/components/prism-cpp.min.js')]);
  return highlight('cpp', code, 'c').then(code => code.replaceAll('::', '꞉꞉'));
}

export async function cmake(code) {
  await import('prismjs/components/prism-cmake.min.js');
  return highlight('cmake', code, 'c');
}

export async function kotlin(code) {
  await import('prismjs/components/prism-kotlin.min.js');
  return highlight('kotlin', code, 'java');
}

export async function sql(code) {
  await import('prismjs/components/prism-sql.min.js');
  return highlight('sql', code, 'SQL');
}

export async function dart(code) {
  await import('prismjs/components/prism-dart.min.js');
  return highlight('dart', code);
}

export async function java(code) {
  await import('prismjs/components/prism-java.min.js');
  return highlight('java', code);
}

export async function bash(code) {
  await import('prismjs/components/prism-bash.min.js');
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
