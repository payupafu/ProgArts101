let title = 'Ludium Nostalgos Vis';
let blurb="Inside the attic of my mind, what's lost will one day resurface";

let found = ['My plush bunny',
'Off brand legos',
' Sketchbooks with dinosaur stickers', ' Animals coloring book', 'Retro brick building set',
'Neon magnet tile builders',
'Stamp kit',
'Digital doodle sketch pad',
'DIY soap lab',
'Retro spiral art set',
'Junior scientist kit',
'Bead pixel art creation kit',
'DIY rubber band racer kit',
'Suction cup gizmo builders',
'Click-and-connect invention set',
'Chunky snap-together blocks',
'LCD graffiti notepad',
'Mini room makeover craft set',
'Roll-out sketch strip with crayons',
'you made it to the end'];


$("#output").html(title);
$("#output1").html(blurb);

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