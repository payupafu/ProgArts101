var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum", "Navy", "Maroon", "Red"];


function makeImage (imageName) {

 if (colors[colorCount] == imageName) {
       $("body").append("<img width=50 src='images/" + imageName + ".png'>");
   }
}

function changeBackground (newColor) {
   $("body").css("background-color", newColor);
}


$(".color-button").click( function () {
 
   changeBackground(this.id);

});



function moody (moodyCount){
   let mood="";
   if (moodyCount < 5) { mood = "gresh and happy"; }
   else if ((moodyCount >= 5) && (moodyCount < 10)) { mood = "keep pushing"; }
   else { mood = "so tired"; }

   return mood;
}

// the button part
$("#needy-button").click(function () {

// move the mood deciding code outside as a seperate function and then call it from here, and use the result of the function for the button message
   let moodMessage=moody(count);

   $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + moodMessage);

   changeBackground( colors[colorCount] );

   makeImage("Coral"); 
   makeImage("Orchid");
   makeImage("HotPink"); 
   makeImage("Plum");
   makeImage("Navy");
   makeImage("Maroon"); 
   makeImage("Red"); 

   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 7) { colorCount = 0; }
});



var images = ["SonicBackground", "MarioBackground", "PacManBackground", "RainbowRoad", "Bomberman"];
let backgroundClicks = 0;

function changeImage(BackgroundName){
$("body").css("background-image", "url(images/"+ BackgroundName +".PNG)")

}

$("#background-button").click(function () {
    changeImage(images[backgroundClicks])
    backgroundClicks = backgroundClicks + 1

})