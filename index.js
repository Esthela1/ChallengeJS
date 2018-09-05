   /********************************
    chalenge 1
    **********************************
    var massMark, heightMark, massJohn, heightJohn;

        massMark = 122;
        heightMark = 1.90;
        massJohn = 105;
        heightJohn = 1.70;
        
        heightMark = heightMark* 2;
        heightJohn = heightJohn * 2;
        
bmiMark = massMark / heightMark;
        console.log(bmiMark);
bmiJhon = massJohn / heightJohn;
        console.log(bmiJhon);

     var bmiMayor = bmiMark > bmiJhon;
        console.log(bmiMayor);

        console.log("Is Mark´s BMI higher than John´s? " + bmiMayor);  */

/************************************
Chalenge 2
**************************************/
 /* var johnTeam, mikeTeam;

        johnTeam = (89 + 120 + 103) / 3;
        console.log(johnTeam);
        
        mikeTeam = (116 + 94 + 123) / 3;
        console.log(mikeTeam);
        
if (johnTeam > mikeTeam) {
        console.log(johnTeam + " John Team has the highest average score");
        
} else {
        console.log(mikeTeam + " Mike Team has the highest average score");
        
} */

/**************************************************
Extra*************************/
/*Tiene correcciones del curso en el && y el > y tambien no se por que si al final pongo un else solo me marca error y no arroja nada*/
var johnTeam, mikeTeam, maryTeam;

johnTeam = (89 + 120 + 103) / 3;
console.log(johnTeam);

mikeTeam = (116 + 94 + 123) / 3;
console.log(mikeTeam);

maryTeam = (97 + 134 + 155) / 3;
console.log(maryTeam);


if (johnTeam > mikeTeam && johnTeam > maryTeam) {
console.log(johnTeam + " John Team has the highest average score");

} else if (mikeTeam > johnTeam && mikeTeam > maryTeam) {
console.log(mikeTeam + " Mike Team has the highest average score");

} else if (maryTeam > mikeTeam && maryTeam > johnTeam) {        
console.log(maryTeam + " Mary Team has the highest average score");
}



