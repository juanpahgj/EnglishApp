/*
* This implementation saves the data in a file (called data.json), whit a JSON format.
*/

import { Word } from "./Word";
import { WordDaoInterface } from "../interfaces/WordDaoInterface";
import * as fs from 'fs';

//const fs=require('fs');
export class WordDaoImpl implements WordDaoInterface{

    private filename = './data.json';
    private list: Word[]=[];

    constructor(){
        try{
            let data=fs.readFileSync(this.filename);
            let dataList= JSON.parse(data.toString());
            dataList.forEach(element => {
                let auxWord:Word=new Word("");
                Object.assign(auxWord, element);
                this.list.push(auxWord);
            });        
        }catch{
            console.log("\nData file created void\n")
        }
    }

    public getWords(): Word[]{
        return this.list;
    }
    
    public updateWord(word: Word): boolean{
        let found=false;
        for(let i=0;i<this.list.length && !found;i++){
            if(this.list[i] == word){
                this.list[i]= word;
                found=true;
            }
        }
        this.store();
        return found;
    }
    
    public getWord(word: string): Word{
        let found=false;
        let wordObject=null;

        for(let i=0;i<this.list.length && !found;i++){
            if((this.list[i].getWord()) == word){
                wordObject=this.list[i];
                found=true;
            }
        }
        return wordObject;
    }
    
    public insertWord(word: Word): void {
        if(!this.duplicated(word)){
            this.list.push(word); 
            this.store();
        }else{
            console.log("Insert error, word already exist");
        }
    }

    private duplicated(toInsert:Word): boolean{
    let result:boolean=false;
        if(this.list.length>0){
            for(let i=0; i<this.list.length && !result; i++){
                result= (this.list[i].getWord() === toInsert.getWord());
            }
        }
    return result;
    }

    private store(): void{
        fs.writeFileSync(this.filename, JSON.stringify(this.list, null,"\t"));
    }
}