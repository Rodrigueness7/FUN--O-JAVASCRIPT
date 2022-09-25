function createCandidate(name,n1,n2){

    this.name = name,
    this.grade1 = n1,
    this.grade2 = n2,

    this.average = function(){
        return (this.grade1 + this.grade2) /2;
    }
}
function passed(average){
    if(average > 7){
        return "APROVED"
    }
    else{
        return"DISAPPROVED"
    }
}
function handbang(average){
    if(average == 10){
        return " 100% "
    }
    else if(average > 9 && average < 10){
        return " 90% "
    }
    else if(average > 8 && average < 9){
        return " 80% "
    }
    else if(average > 7 && average < 8){
        return " 70% "
    }
}
var candidate = [
    new createCandidate("Alex", 10, 9),
    new createCandidate("Fabio", 8, 9)
]

for( var a of candidate){
    console.log("Name - " + a.name + " - Average - " +
    a.average() + " - Result - " + passed(a.average()) +
    " - Handbang - " + handbang(a.average()))
}