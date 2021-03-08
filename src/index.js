"use strict";
exports.__esModule = true;
var Word_1 = require("./model/Word");
var WordDaoImpl_1 = require("./model/WordDaoImpl");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var storage = new WordDaoImpl_1.WordDaoImpl();
rl.question('Introduce a word: ', function (answer) {
    rl.close();
    console.log(typeof (answer));
    var word = new Word_1.Word(answer);
    storage.insertWord(word);
});
