  import Prism from 'prismjs'
  import marked from "marked";
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
  import 'prismjs/components/prism-sql.min.js';
  import 'prismjs/components/prism-kotlin.min.js';
  import 'prismjs/components/prism-cmake.min.js';
  import 'prismjs/components/prism-c.min.js';
  import 'prismjs/components/prism-cpp.min.js';
  import 'prismjs/components/prism-mongodb.min.js';
  import 'prismjs/components/prism-c.min.js';
  import 'prismjs/components/prism-csharp.min.js';

  import {processRegex} from './utils';
  import './mapPrismDefaultClassnames.js';
  import { enhanceComment } from './utils/enhanceComment';
  import { alignLeftCommentEnhancer, wrapComment } from './utils/commentEnhancers';

  function highlight(language, code, cssClassnameAlias = language) {
    const html = Prism.highlight(code, Prism.languages[language], language);
    return `<div class="cc ${cssClassnameAlias}"><pre>${html}</pre></div>`;
  }

  function highlightRegex(...args) {
    let html = highlight(...args);
    return processRegex(html);
  }

  

  export const comment = text => enhanceComment(marked, alignLeftCommentEnhancer, wrapComment)(text);
  export const plaincode = code => {
    const html = code.replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    return `<div class="cc"><pre><code>${html}</code></pre></div>`;
  };

  export const html = code => highlight('html', code);
  export const css = code => highlight('css', code);
  export const javascript = code => highlightRegex('javascript', code, 'js');
  export const react = code => highlightRegex('jsx', code, 'js');
  export const typescript = code => highlight('typescript', code, 'js');
  export const scss = code => highlight('scss', code, 'css');
  export const less = code => highlight('less', code, 'css');;
  export const graphql = code => highlight('graphql', code, 'gql');
  export const json = code => highlight('json', code);
  export const python = code => highlight('python', code, 'py');
  export const cs = code => highlight('cs', code);
  export const mongo = code => highlight('mongodb', code, 'mongo');
  export const c = code => highlight('c', code);
  export const cpp = code => highlight('cpp', code, 'c').replaceAll('::', '꞉꞉');
  export const rust = code => highlight('rust', code).replaceAll('::', '꞉꞉');
  export const cmake = code => highlight('cmake', code, 'c');
  export const kotlin = code => highlight('kotlin', code, 'java');
  export const sql = code => highlight('sql', code);
  export const java = code => highlight('java', code);