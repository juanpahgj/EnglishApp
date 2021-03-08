"use strict";
/*
* This implementation saves the data in a file (called data.json), whit a JSON format.
*/
exports.__esModule = true;
exports.WordDaoImpl = void 0;
var Word_1 = require("./Word");
var fs = require("fs");
//const fs=require('fs');
var WordDaoImpl = /** @class */ (function () {
    function WordDaoImpl() {
        var _this = this;
        this.filename = './data.json';
        this.list = [];
        try {
            var data = fs.readFileSync(this.filename);
            var dataList = JSON.parse(data.toString());
            dataList.forEach(function (element) {
                var auxWord = new Word_1.Word("");
                Object.assign(auxWord, element);
                _this.list.push(auxWord);
            });
        }
        catch (_a) {
            console.log("\nData file created void\n");
        }
    }
    WordDaoImpl.prototype.getWords = function () {
        return this.list;
    };
    WordDaoImpl.prototype.updateWord = function (word) {
        var found = false;
        for (var i = 0; i < this.list.length && !found; i++) {
            if (this.list[i] == word) {
                this.list[i] = word;
                found = true;
            }
        }
        this.store();
        return found;
    };
    WordDaoImpl.prototype.getWord = function (word) {
        var found = false;
        var wordObject = null;
        for (var i = 0; i < this.list.length && !found; i++) {
            if ((this.list[i].getWord()) == word) {
                wordObject = this.list[i];
                found = true;
            }
        }
        return wordObject;
    };
    WordDaoImpl.prototype.insertWord = function (word) {
        if (!this.duplicated(word)) {
            this.list.push(word);
            this.store();
        }
        else {
            console.log("Insert error, word already exist");
        }
    };
    WordDaoImpl.prototype.duplicated = function (toInsert) {
        var result = false;
        if (this.list.length > 0) {
            for (var i = 0; i < this.list.length && !result; i++) {
                result = (this.list[i].getWord() === toInsert.getWord());
            }
        }
        return result;
    };
    WordDaoImpl.prototype.store = function () {
        fs.writeFileSync(this.filename, JSON.stringify(this.list, null, "\t"));
    };
    return WordDaoImpl;
}());
exports.WordDaoImpl = WordDaoImpl;
