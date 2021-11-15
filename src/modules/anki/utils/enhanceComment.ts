import type { CommentFunction, CommentEnhancer } from './types';

function enhanceComment(...args: CommentEnhancer[]): CommentFunction {
    return function enhancedComment(s: string): string {
        let result = s;
        for (let enhancer of args) {
            result = enhancer(result);
        }
        return result;
    };
}



export { enhanceComment };

