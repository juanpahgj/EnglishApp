"use strict";
exports.__esModule = true;
exports.Wrapper = void 0;
var Wrapper = /** @class */ (function () {
    function Wrapper() {
        this.list = [];
        // this.list=new Array<Word>();
    }
    Wrapper.prototype.getArray = function () {
        return this.list;
    };
    Wrapper.prototype.setArray = function (list) {
        this.list = list;
    };
    return Wrapper;
}());
exports.Wrapper = Wrapper;
