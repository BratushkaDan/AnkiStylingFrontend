import { isPlainObject } from '@reduxjs/toolkit/node_modules/immer/dist/internal';
import type { CommentFunction, CommentEnhancer } from './types';

function alignLeftCommentEnhancer(s: string): string {
    let testForPattern = /(<[^>]+>)(&lt;-\s)/m.test(s);
    if (!testForPattern) {
        return s;
    }
    console.log(s);
    let expr = /<[a-zA-Z-]+\s/m.exec(s);
    console.log(expr);
    if (!expr) {
        return s;
    }
    const openingTag = expr[0].slice(1, expr[0].length - 1)
    const testForClosingTag = ~s.search(`</${openingTag}>`);
    console.log(openingTag);
    if (!testForClosingTag) {
        return s;
    }
    const arrowPos = s.search('&lt;-');
    const leftSlice = s.slice(0, arrowPos - 1);
    const rightSlice = s.slice(arrowPos + 6);
    console.log(`${leftSlice} style="text-align: left;">${rightSlice}`);
    return `${leftSlice} style="text-align: left;">${rightSlice}`;
}

function wrapComment(comment: string): string {
    return `<div class="com">${comment}</div>`;
}

export { alignLeftCommentEnhancer, wrapComment };