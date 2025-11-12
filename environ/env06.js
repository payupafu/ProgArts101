let title = "Welcome to butterflygirl1990's personal blog and diary!";
let blurb = 'My name is Laura Miller, Im 17 years old. I go to Tillamook High school and I am a member of the book club.'
let blurb1 = ' My friend Alex is helping me make my own website. If you like this blog, please bookmark this page and keep reading!';

let found = ['Some things I like!:',
  'Sunny spring afternoons',
  'Hot cocoa on cold days',
  'Shopping for new clothes',
  'Taking Sadie for walks',
  'Taking photos',
  'Watching the birds',
  'Baking peach pie',
  'Going to the library',
];

$("#output").append(title);


let messagelist = 0
document.getElementById("butclick").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("butclick").innerHTML = found[messagelist];
  messagelist = messagelist + 1
};

let blurblist = 0
let altblurb = ['What becomes of you sleeps in ash', 'Plastic regret tangled in the waters','Sun will one day reach the abyssal sea',]
document.getElementById("output1").onclick = function() {myFunction2()};

function myFunction2() {
  document.getElementById("output1").innerHTML = altblurb[blurblist];
  blurblist = blurblist + 1
  if (blurblist>3)
    $('#output1').html('termination')
};

$("#output1").hover(function(){
        $(this).css("background-image", "url(images/skulls.jpg)");
        $(this).css("color", "red")
        $(this).html("Are you forgetting something?")
    }
);


$("#output").hover(function(){
        $(this).css("background-image", "url(images/skulls2.jpg)");
        $(this).css("color", "white")
        $(this).html("Do you know what you've wandered into? Click here")
    }
);
$("#output").click(function(){
    $("body").css("background-image", "url(images/faces.gif)");
})
$("#paintpool").html("<img width = 800px src='images/paintblank.png'>");

document.getElementById('buttons').addEventListener('click', function(evt) {
  var target = evt.target;
  if (target.id === 'Red') {
    $("#paintpool").html("<img width = 800px src='images/paintred.png'>");
        document.getElementById('buttons').addEventListener('click', function(evt2) {
        var target = evt2.target;
        if (target.id === 'Blue'){
        $("#paintpool").html("<img width = 800px src='images/paintpurple.png'>");
        }
        if (target.id === 'Yellow'){
        $("#paintpool").html("<img width = 800px src='images/paintorange.png'>");
        }
        }, false);}

  if (target.id === 'Blue') {
    $("#paintpool").html("<img width = 800px src='images/paintblue.png'>");
    document.getElementById('buttons').addEventListener('click', function(evt2) {
        var target = evt2.target;
        if (target.id === 'Red'){
        $("#paintpool").html("<img width = 800px src='images/paintpurple.png'>");
        }
        if (target.id === 'Yellow'){
        $("#paintpool").html("<img width = 800px src='images/paintgreen.png'>");
        }
    }, false);}
        
    if (target.id === 'Yellow'){
    $("#paintpool").html("<img width = 800px src='images/paintyellow.png'>");
    document.getElementById('buttons').addEventListener('click', function(evt2) {
        var target = evt2.target;
        if (target.id === 'Red'){
        $("#paintpool").html("<img width = 800px src='images/paintorange.png'>");
        }
        if (target.id === 'Blue'){
        $("#paintpool").html("<img width = 800px src='images/paintgreen.png'>");
        }}
        )};
    
}); //closing

