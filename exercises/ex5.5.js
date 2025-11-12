function outputcolor() {
let color = prompt ('enter color')
$("body").css("background-color", color);

};

function outputword() {
let word = prompt('enter word')
$('#output').html('<h1>'+word +'</h1>')}

$("#colbut").click(function () {
outputcolor()
});


$("#worbut").click(function () {
    
    outputword()
});


