import { Word } from "./model/Word";
import { WordDaoImpl } from "./model/WordDaoImpl";
import { WordDaoInterface } from "./interfaces/WordDaoInterface";
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let storage: WordDaoInterface=new WordDaoImpl();


    rl.question('Introduce a word: ', (answer) => {
    rl.close();
    console.log(typeof(answer));
    let word=new Word(answer);
    storage.insertWord(word);
    });