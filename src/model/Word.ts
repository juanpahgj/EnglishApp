class Word{
    
    word: string;
    hits: number;

    constructor(word: string){
        this.word= word;
        this.hits= 0;
    }

    getWord(){
        return this.word;
    }

    setWord(word: string){
        this.word=word;
    }

    getHits(){
        return this.hits;
    }

    setHits(hits:number){
        this.hits=hits;
    }
}

export {Word}