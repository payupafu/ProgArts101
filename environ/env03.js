let title = 'Meta-description';
let blurb='This is a place that exists inside attic of my mind, a lot gets lost here';

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
'Roll-out sketch strip with crayons',]


$("#output").html(title);
$("#output1").html(blurb);

let messagelist = 0
document.getElementById("pclick").onclick = function() {myFunction()};
function myFunction() {
  document.getElementById("pclick").innerHTML = found[messagelist];
  messagelist = messagelist + 1
};
let thoughtbox = {
    Mind: 'Mind: full ',
    OldToys: 'Old Toys: donated ',
    Memories:'Memories: lost ',
    You: 'You: Still here ',
};
let hi = thoughtbox.Mind + thoughtbox.OldToys+thoughtbox.Memories+thoughtbox.You;
$("#output3").html(hi);
