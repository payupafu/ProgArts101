function askNumber(whatNumber) {
let userNumber = prompt("Guess 1-10?");
if (userNumber == whatNumber) //whatnumber is the input variable
{
    $("#output").html("You got it!");
}
else {
    $("#output").html("Noooooope");
}
};

$("#good-button").click(function () {
    askNumber(5); //number here is the correct answer, static
});