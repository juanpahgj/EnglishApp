/*
* This implementation saves the data in a file (called data.json), whit a JSON format.
*/

import { Word } from "./Word";
import { WordDaoInterface } from "./WordDaoInterface";
//import {fs} from 'fs';
const fs=require('fs');

class WordDaoImpl implements WordDaoInterface{

    private filename: String = 'data.js';
    private objectsList: Array<Word>;

    constructor(){
        this.objectsList=new Array<Word>();

        fs.readFile(this.filename, 'utf8', function(err, data) {
            if (err) return console.log(err);

            //console.log(data);
            this.objectsList=JSON.parse(data);
        });   
    }

    public getWords(): Array<Word>{
        return this.objectsList;
    }
    
    public updateWord(word: Word): boolean{
        let found=false;
        for(let i;i<this.objectsList.length && !found;i++){
            if(this.objectsList[i] == word){
                this.objectsList[i]=word;
                found=true;
            }
        } 
        return found;
    }
    
    public getWord(word: string): Word{
        let found=false;
        let wordObject=null;

        for(let i;i<this.objectsList.length && !found;i++){
            if((this.objectsList[i].getWord()) == word){
                wordObject=this.objectsList[i];
                found=true;
            }
        }
        return wordObject;
    }
    
    public insertWord(word):void{
        this.objectsList.push(word);
    }

    private store(){
        let db=JSON.stringify(this.objectsList);

        fs.writeFile(this.filename, db, function(err) {
            if (err) return console.log(err);
        });
    }
}