/* Declare a variable named image and set the value to null */
var image = null;

/* Define upload() function which uploads the image from your computer and displays it to the page */
function upload() {
  //Declare var called fileinput and set it to the file input button (getElementById)
  var fileinput = document.getElementById("finput");
  //Set var image to new SimpleImage(fileinput)
  image = new SimpleImage(fileinput);
  // Declare and initialize canvas from the HTML (getElementById)
  var canvas = document.getElementById("myCanvas");
  //Draw image on canvas using drawTo(canvas) function
  image.drawTo(canvas);
}

/* Define function makeFilter() which takes the pixels of the image and transforms them to a different color */
function makeFilter() {
  //for every pixel of the image, change the value to one of three shades of gray
  for (var pixel of image.values()) {
    //given variable for gray value
    var gray_val = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    /* COLOR TIME */
    if (gray_val > 180){
      //yellow
      pixel.setRed(253);
      pixel.setGreen(215);
      pixel.setBlue(0);
    }
    else if (gray_val > 120){
      //orange
      pixel.setRed(253);
      pixel.setGreen(146);
      pixel.setBlue(0);
    }
    else if (gray_val > 60){
      //red
      pixel.setRed(248);
      pixel.setGreen(0);
      pixel.setBlue(12);
    }
    else{
      //dark brown
      pixel.setRed(157);
      pixel.setGreen(94);
      pixel.setBlue(6);
    }
  }
  /* Display new image */
  //Declare and initialize canvas from the HTML (getElementById)
  var canvas = document.getElementById("myCanvas");
  //Draw image on canvas using drawTo(canvas) function
  image.drawTo(canvas);
}

function addGongxi(){
  document.getElementById("imageHead").textContent = "新年快樂!";
  document.getElementById("imageFoot").textContent = "恭喜發財!";
}