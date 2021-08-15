import Prism from 'prismjs';
import 'prismjs/plugins/custom-class/prism-custom-class.min';

import tokenCs from './mapPrismDefaultClassnames.module.scss';

Prism.plugins.customClass.map({...tokenCs})