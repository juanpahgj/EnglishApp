import { Word } from "../model/Word";

interface WordDaoInterface{
    getWords(): Array<Word>;
    updateWord(word: Word): boolean;
    getWord(word: string): Word;
    insertWord(word:Word): void;
}

export {WordDaoInterface}