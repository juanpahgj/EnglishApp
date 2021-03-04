const Word ={};

/*function Word(name, traduction, frequency) { 
    this.name=name 
    this.traduction=traduction
    this.frequency=frequency
};*/

function setName(name){
    this.name=name;
}

function getName(){
    return this.name;
}

function setTraduction(traduction){
    this.traduction=traduction;
}

function getTraduction(){
    return this.traduction;
}

function setFrequency(fq){
    this.frequency=fq;
}

function getFrequency(){
    this.frequency;
}

Word.setName=setName;
Word.getName=getName;
Word.setTraduction=setTraduction;
Word.getTraduction=getTraduction;
Word.setFrequency=setFrequency;
Word.getFrequency=getFrequency;

module.exports = Word;