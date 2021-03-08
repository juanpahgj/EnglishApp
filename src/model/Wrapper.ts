import { Word } from "./Word";

class Wrapper{
    
    private list: Word[]=[];
    

    constructor(){
       // this.list=new Array<Word>();
    }

    public getArray(): Word[]{
        return this.list;
    }

    public setArray(list: Word[]): void{
        this.list=list;
    }
}

export{Wrapper}