/*
* This implementation saves the data in a file (called data.json), whit a JSON format.
*/

import { Word } from "./Word";
import { WordDaoInterface } from "../interfaces/WordDaoInterface";
import { Wrapper } from "./Wrapper";
import * as fs from 'fs';

//const fs=require('fs');

class WordDaoImpl implements WordDaoInterface{

    private filename = './data.json';
    private wrapper: Wrapper = new Wrapper();

    constructor(){
        try{
            let data=fs.readFileSync(this.filename);
            //console.log(data);
            let js= JSON.parse(data.toString());
            console.log(js);
            this.wrapper.setArray(js.list);
            //console.log("1"+this.wrapper);
        }catch{
            console.log("\nData file created void\n")
        }
    }

    public getWords(): Word[]{
        return this.wrapper.getArray();
    }
    
    public updateWord(word: Word): boolean{
        let found=false;
        for(let i=0;i<this.wrapper.getArray().length && !found;i++){
            if(this.wrapper.getArray()[i] == word){
                this.wrapper.getArray()[i]=word;
                found=true;
            }
        }
        this.store();
        return found;
    }
    
    public getWord(word: string): Word{
        let found=false;
        let wordObject=null;

        for(let i=0;i<this.wrapper.getArray().length && !found;i++){
            if((this.wrapper.getArray()[i].getWord()) == word){
                wordObject=this.wrapper.getArray()[i];
                found=true;
            }
        }
        return wordObject;
    }
    
    public insertWord(word: Word): void {
        if(this.wrapper!=null && this.notDuplicated(word)){
            //console.log("2"+this.wrapper);
            let mylist:Word[]= this.wrapper.getArray();
            mylist.push(word);
            this.wrapper.setArray(mylist);
            this.store();
        }else{
            console.log("Error!!!");
        }
    }

    private notDuplicated(toInsert:Word):boolean{
        let result:boolean=false;
        let array=this.wrapper.getArray()
        for(let i=0; i<this.wrapper.getArray().length && !result; i++){
            result=(array[i].getWord === toInsert.getWord);
        }
        return result;
    }

    private store():void{
        fs.writeFileSync(this.filename, JSON.stringify(this.wrapper));
    }
}

export{WordDaoImpl}