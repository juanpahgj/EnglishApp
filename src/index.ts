import { Word } from "./model/Word";
import { WordDaoImpl } from "./model/WordDaoImpl";
import { WordDaoInterface } from "./interfaces/WordDaoInterface";

let storage: WordDaoInterface=new WordDaoImpl(); 
let word=new Word("j");
storage.insertWord(word);