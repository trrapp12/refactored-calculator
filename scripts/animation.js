let themes = {
  astronomy: [
    "url('images/astronomy/1.jpg')", "url('images/astronomy/2.jpg')", "url('images/astronomy/3.jpg')", "url('images/astronomy/4.jpeg')"
  ],
  code: [
    "url('images/code/1.jpeg')",
    "url('images/code/2.jpg')",
    "url('images/code/3.jpg')",
    "url('images/code/4.png')",
],
  matrix: [
    "url('images/code/1.png')",
    "url('images/code/2.jpg')",
    "url('images/code/3.jpg')",
  ],
}

let white = "url('images/white.jpeg')"

var pauseVar = -1;
console.log(pauseVar);

function pause () {

  switch(pauseVar) {
    case 1:
    console.log("it got to this point");

    document.getElementById('pause').innerHTML = "<i class='fa fa-pause' aria-hidden='true'></i>";

    console.log("it got to this point");

    document.getElementById("switch1").style.backgroundImage = "url('images/photoone.jpg')";
    document.getElementById("switch2").style.backgroundImage = "url('images/white.jpeg')";
    document.getElementById("switch3").style.backgroundImage = "url('images/phototwo.jpg')";
    document.getElementById("switch4").style.backgroundImage = "url('images/white.jpeg')";
    document.getElementById("switch5").style.backgroundImage = "url('images/photothree.jpg')";
    document.getElementById("switch6").style.backgroundImage = "url('images/white.jpeg')";
    document.getElementById("switch7").style.backgroundImage = "url('images/photofour.jpg')";
    document.getElementById("switch8").style.backgroundImage = "url('images/white.jpeg')";
    break;
    case -1:
    document.getElementById('pause').innerHTML = "<i class='fa fa-play' aria-hidden='true'></i>";

    document.getElementById("switch1").style.backgroundImage = "url('images/white.jpeg')";
    document.getElementById("switch2").style.backgroundImage = "url('images/white.jpeg')";
    document.getElementById("switch3").style.backgroundImage = "url('images/white.jpeg')";
    document.getElementById("switch4").style.backgroundImage = "url('images/white.jpeg')";
    document.getElementById("switch5").style.backgroundImage = "url('images/white.jpeg')";
    document.getElementById("switch6").style.backgroundImage = "url('images/white.jpeg')";
    document.getElementById("switch7").style.backgroundImage = "url('images/white.jpeg')";
    document.getElementById("switch8").style.backgroundImage = "url('images/white.jpeg')";
    break;
  }
  pauseVar *= -1;
}
