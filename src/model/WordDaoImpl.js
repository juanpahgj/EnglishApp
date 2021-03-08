"use strict";
/*
* This implementation saves the data in a file (called data.json), whit a JSON format.
*/
exports.__esModule = true;
exports.WordDaoImpl = void 0;
var Wrapper_1 = require("./Wrapper");
var fs = require("fs");
//const fs=require('fs');
var WordDaoImpl = /** @class */ (function () {
    function WordDaoImpl() {
        this.filename = './data.json';
        this.wrapper = new Wrapper_1.Wrapper();
        try {
            var data = fs.readFileSync(this.filename);
            //console.log(data);
            var js = JSON.parse(data.toString());
            console.log(js);
            this.wrapper.setArray(js.list);
            //console.log("1"+this.wrapper);
        }
        catch (_a) {
            console.log("\nData file created void\n");
        }
    }
    WordDaoImpl.prototype.getWords = function () {
        return this.wrapper.getArray();
    };
    WordDaoImpl.prototype.updateWord = function (word) {
        var found = false;
        for (var i = 0; i < this.wrapper.getArray().length && !found; i++) {
            if (this.wrapper.getArray()[i] == word) {
                this.wrapper.getArray()[i] = word;
                found = true;
            }
        }
        this.store();
        return found;
    };
    WordDaoImpl.prototype.getWord = function (word) {
        var found = false;
        var wordObject = null;
        for (var i = 0; i < this.wrapper.getArray().length && !found; i++) {
            if ((this.wrapper.getArray()[i].getWord()) == word) {
                wordObject = this.wrapper.getArray()[i];
                found = true;
            }
        }
        return wordObject;
    };
    WordDaoImpl.prototype.insertWord = function (word) {
        if (this.wrapper != null && this.notDuplicated(word)) {
            //console.log("2"+this.wrapper);
            var mylist = this.wrapper.getArray();
            mylist.push(word);
            this.wrapper.setArray(mylist);
            this.store();
        }
        else {
            console.log("Error!!!");
        }
    };
    WordDaoImpl.prototype.notDuplicated = function (toInsert) {
        var result = false;
        var array = this.wrapper.getArray();
        for (var i = 0; i < this.wrapper.getArray().length && !result; i++) {
            result = (array[i].getWord === toInsert.getWord);
        }
        return result;
    };
    WordDaoImpl.prototype.store = function () {
        fs.writeFileSync(this.filename, JSON.stringify(this.wrapper));
    };
    return WordDaoImpl;
}());
exports.WordDaoImpl = WordDaoImpl;
