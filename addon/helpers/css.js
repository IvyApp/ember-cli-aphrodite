import { css as aphroditeCss } from 'aphrodite';
import { helper } from '@ember/component/helper';

export function css(params) {
  return aphroditeCss(...params);
}

export default helper(css);
