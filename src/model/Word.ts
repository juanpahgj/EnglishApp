export class Word{
    
    word: string;
    hits: number;

    constructor(word: string){
        this.word= word;
        this.hits= 0;
    }

    public getWord(): string{
        return this.word;
    }

    public  setWord(word: string): void{
        this.word=word;
    }

    public getHits(): number{
        return this.hits;
    }

    public setHits(hits:number): void{
        this.hits=hits;
    }
}