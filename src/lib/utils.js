'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.merge = merge;
var clsx_1 = require('clsx');
var tailwind_merge_1 = require('tailwind-merge');
function merge() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}
