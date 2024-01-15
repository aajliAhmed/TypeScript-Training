let sports : string[] = ["Golf", "Cricket", "Tennis", "Swimming"];
/*
for(let i=0;i<sports.length; i++){
    console.log(sports[i]);
}
*/
for (let sportsOne of sports){
    if(sportsOne == "Cricket"){
        console.log(sportsOne +"  favorite sports")
    }
    else{
        console.log(sportsOne);
    }
    
}