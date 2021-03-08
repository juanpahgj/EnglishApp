"use strict";
exports.__esModule = true;
exports.Word = void 0;
var Word = /** @class */ (function () {
    function Word(word) {
        this.word = word;
        this.hits = 0;
    }
    Word.prototype.getWord = function () {
        return this.word;
    };
    Word.prototype.setWord = function (word) {
        this.word = word;
    };
    Word.prototype.getHits = function () {
        return this.hits;
    };
    Word.prototype.setHits = function (hits) {
        this.hits = hits;
    };
    return Word;
}());
exports.Word = Word;
