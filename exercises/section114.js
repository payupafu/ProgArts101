
//current function, starts full loop when clicked and finishes, no good



//goal: on click, start loop at count 0
//clicking starts an iteration, outputs the current

let list = ['My plush bunny',
' Off brand legos',
' Sketchbooks with dinosaur stickers', ' Animals coloring book', 'Retro brick building set',
' Neon magnet tile builders',
' Stamp kit',
' Digital doodle sketch pad',
' DIY soap lab',
' Retro spiral art set',
' Junior scientist kit',
' Bead pixel art creation kit',
' DIY rubber band racer kit',
' Suction cup gizmo builders',
' Click-and-connect invention set',
' Chunky snap-together blocks',
' LCD graffiti notepad',
' Mini room makeover craft set',
' Roll-out sketch strip with crayons',
' you made it to the end'];

for (let y = 0; y < list.length; y++) {
    $("#output2").append(list[y]+ "\n")
    if (y=5) {
    $("#output2").append(" This is item 5 -> ")
    }
};

for (let i = 0;i < 11; i++) {
    var changer = i + 10 + " "
    $("#output").append(changer)
};



