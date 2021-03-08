"use strict";
exports.__esModule = true;
var Word_1 = require("./model/Word");
var WordDaoImpl_1 = require("./model/WordDaoImpl");
var storage = new WordDaoImpl_1.WordDaoImpl();
var word = new Word_1.Word("j");
storage.insertWord(word);
