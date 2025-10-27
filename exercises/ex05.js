var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];

$(".color-button").click(function () {
   paintPage(this.id);
});


function makeimage (imagename) {
if (colors[colorCount] == imagename) {
       $("body").append("<img width = 50px src='images/" + imagename + ".png'>");
   }
}
$("#needy-button").click(function () {
   if (count < 5) { mood = "gresh and happy"; }
   else if ((count >= 5) & (count < 10)) { mood = "keep pushing"; }
   else { mood = "so tired"; }
   $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + mood);
   $("body").css("background-color", colors[colorCount]);
   
   makeimage("Coral")

   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 4) { colorCount = 0; }
});
