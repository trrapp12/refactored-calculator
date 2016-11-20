let themes = {
  astronomy: [
    "url('images/astronomy/1.jpg')", "url('images/astronomy/2.jpg')", "url('images/astronomy/3.jpg')", "url('images/astronomy/4.jpeg')"
  ],
  code: [
    "url('images/code/1.png')",
    "url('images/code/2.jpg')",
    "url('images/code/3.jpg')",
    "url('images/code/4.png')",
],
  matrix: [
    "url('images/matrix/1.png')",
    "url('images/matrix/2.jpg')",
    "url('images/matrix/3.jpg')",
  ],
};

let currentTheme = themes.astronomy;

let switches = [document.getElementById("switch1"), document.getElementById("switch2"), document.getElementById("switch3"), document.getElementById("switch4"), document.getElementById("switch5"), document.getElementById("switch6"), document.getElementById("switch7"), document.getElementById("switch8")];

let white = "url('images/white.jpeg')";

let slategray = "url()";

var pauseVar = 1;

initializeThemeDropDown();

setEventHandlers();

function initializeThemeDropDown () {
  let selectTag = document.getElementById("select")
  for (var theme in themes) {
    let option_tag = document.createElement("option");
    option_tag.text = theme;

    selectTag.add(option_tag)
  };
};

function selectTheme () {
  let selectThemeTag = document.getElementById("select");
  currentTheme = themes[selectThemeTag.options[select.selectedIndex].value];
  updateImages();
};

function setEventHandlers () {
  document.getElementById("select").onchange = selectTheme;
}

function pause () {
  pauseVar *= -1;
  updateImages();
};

function updateImages () {
  switch(pauseVar) {
    case 1:

    document.getElementById('pause').innerHTML = "<i class='fa fa-pause' aria-hidden='true'></i>";

    for (i = 0; i < switches.length; i = i+2) {
      switches[i].style.backgroundImage = currentTheme[i];
      switches[i+1].style.backgroundImage = white;
    };

    break;
    case -1:
    document.getElementById('pause').innerHTML = "<i class='fa fa-play' aria-hidden='true'></i>";

    for (i = 0; i < switches.length; i++) {
      switches[i].style.backgroundImage = white;
    };

    break;
  };
}
