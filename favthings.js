var testArray = ["Raindrops on Roses", "Whiskers on Kittens", "Bright Copper Kettles", "Warm Woolen Mittens"];

function myFavoriteThings(anArray) {
  for(var i = 0; i < anArray.length; i += 1) {
    console.log("My #" + (i + 1) + " favorite thing is " + anArray[i] + ".");
  }
}