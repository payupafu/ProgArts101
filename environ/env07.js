let title = 'Double Click me';
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


$("#clicktitle").html(title);
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
    
}); 


$(".color-button").hover(function(){
    $(this).animate({fontSize:'150%'})
},
function(){
  $(this).animate({fontSize:'100%'})
});

$("#output").dblclick(function() {
    $('body').css("background-image", "url(images/eyes.gif")

    $(this).css("background-image", "url(images/skulls2.jpg)");
    $(this).css("color", "white")
    $(this).html("Are you forgetting something?")

    $("#output1").css("background-image", "url(images/skulls.jpg)");
    $("#output1").css("color", "red")
    $("#output1").html("Are you forgetting something?")

    $("#output2").css("background-image", 'url(images/paintblank.jpg)')
    $("#output2").css("border-color", 'Blue')
    $("#output2").css("border-style", 'Solid')
    $("#output2").html("")
    $("#keyspot").append("<img width = 200px id='key' src= 'images/key.png'>")
       
    $(document).mousemove(function(event) {
      $("#keyspot").css({
          left: event.pageX - 110,
          top: event.pageY - 110,
          position: "absolute"
      });
    });

   var evil = true
   if (evil = true) {
      $("#output2").click(function() {
        $('body').css("background-image", "url(images/black.png")
                $('body').css("color", "White")
        $('body').html("<p>termination</p>")
   });

    $('#output3').html('<p>The key is the way out</p>')
    $('#output3').css("display", "flex")
    $('#output3').css("background-image", "url(images/faces.gif)")
    $("#output3").css("border-color", 'Black')
      for (let i = 0; i<50; i++) {
      $("#output3").append("<div class='eye'>•</div>")
    };
};
});

