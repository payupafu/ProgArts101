const img = new Image();

img.src = 'path/to/your/image.jpg';


img.onload = function() {


    const originalWidth = img.width;


    const originalHeight = img.height;


    console.log('Original Width:', originalWidth);


    console.log('Original Height:', originalHeight);


};



$("#add-creature").click(
    function () {

        // grab the value from the input
        let crName = $("#crName").val();
        let crColor= $("#crColor").val();
        
        let crEyesNum = $("#crEyesNum").val();
        let crEyesHTML = "";

        let numVeg = $("#numVeg").val();
        let vegHTML = '';

        let numFruit = $("#numFruit").val();
        let fruitHTML = '';

        let numMeat = $("#numMeat").val();
        let meatHTML = '';

       for (let i = 0; i < numVeg; i++) {
        vegHTML = vegHTML + "<img width=50 src='images/Veg.png'>"
};
for (let i = 0; i < numFruit; i++) {
        fruitHTML = fruitHTML + "<img width=50 src='images/fruit.png'>"
};
for (let i = 0; i < numMeat; i++) {
        meatHTML = meatHTML + "<img width=50 src='images/meat.png'>"
};

        for (let i = 0; i < crEyesNum; i++) {
        crEyesHTML = crEyesHTML + "<div class='eye'>.</div>"; //css style creates eye shape, . creates pupil, illusion of an eye
        //creates 1 div per eye for each num input, 
        //prints . inside creature body div
}


        // check for the field value do not add empty ones
        if ( (crName == "") || (crName.length>12) ) { // do nothing 
        } //|| is or:empty or over 12 letters
        else {
            $("#creature-list").append(`
    
    <div class="creature">
    
    <div class="food"> ${vegHTML} ${fruitHTML} ${meatHTML}</div>

    <div class="creature-body" style="background-color: ${crColor}"> ${crEyesHTML} </div>
    <div class="creature-info">${crName}</div>
   
</div>
`);

        }

        // remove the name after it's added
        $("#crName").val("");

    });