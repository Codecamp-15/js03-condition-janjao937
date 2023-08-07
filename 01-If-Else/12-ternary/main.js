let score = 50;
/*
if(score >= 80){
    alert("A")
}
else if(score >=70 && score <=79){
    alert("B");
}
else if(score >=60 && score <=69){
    alert("C");
}
else if(score >=50 && score <=59){
    alert("D");
}
else if(score < 50)
{
    alert("F");
}
*/

(score >= 80) ? alert("a") : (score >= 70 && score <= 79) ? alert("B") : (score >= 60 && score <= 69) ? alert("C") : (score >= 50 && score <= 59) ? alert("D") : (score < 50) ? alert("F") : alert("Invalid");
