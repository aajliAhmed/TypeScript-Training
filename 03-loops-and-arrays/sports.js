var sports = ["Golf", "Cricket", "Tennis", "Swimming"];
/*
for(let i=0;i<sports.length; i++){
    console.log(sports[i]);
}
*/
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sportsOne = sports_1[_i];
    if (sportsOne == "Cricket") {
        console.log(sportsOne + "  favorite sports");
    }
    else {
        console.log(sportsOne);
    }
}
