let myCommutes = ['Metro Bus', 'Carpool with friends', 'walking'];
let myFavouriteCommute = {
    type: 'Bus',
    route: 2,
    hasmiddledoor:true,
    importantstops: ['Capitola Rd and 7th Ave', 'Water & Poplar', 'Downtown'],

};
let megasentence;
megasentence = "<p> My top two commutes from the array are " + myCommutes[0]  + ", " + myCommutes[1] + "</p>";
megasentence = megasentence + "<p> My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best stop " + myFavouriteCommute.importantstops[0] + "</p>";

$("#output").html(megasentence);
