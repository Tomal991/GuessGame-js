var count = 0;
var count2 = 0;
for (var i = 0; i < 5; i++) {

    var guessno = parseInt(prompt("Enter any number between 1 to 5"));
    var randomNumber = Math.floor(Math.random() * 5 + 1);
    if (guessno == randomNumber) {
        console.log("you have won");
        count++;
    }
    else {
        console.log("You have lost.Random number was" + randomNumber);
        count2++;
    }
}
document.write("Total won =" + count + "Total lost=" + count2);