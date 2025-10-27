let count = 0;

let colors = ["Orchid", "Coral", "HotPink", "Plum"];
$("#needy").click( function() {
   
   $("#needy").html(count + " clicks, "+ colors[count]);

$("body").css("background-color", colors[count]);
   count = count + 1;

let colorssize=colors.length;

if (count == 4)
   $('#needy').html(colorssize + ' clicks made, termination');
if (count > 5)
   $('#needy').html('jk lol' + nekodesu.name)

});



let nekodesu = {
name: "pekoe",
food: "tuna",
fat:true,
};

let messagelist = 0
let messages = ['you clicked me','you did it again','dude stop']
document.getElementById("pclick").onclick = function() {myFunction()};
function myFunction() {
  document.getElementById("pclick").innerHTML = messages[messagelist];
  messagelist = messagelist + 1
}

