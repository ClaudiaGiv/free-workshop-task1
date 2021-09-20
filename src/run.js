// You do not need to edit this file.
window.run = () => {
  if (document.getElementById("albumOne").innerHTML == "Sezonul 4") {
    document.getElementById(
      "albumOneArt"
    ).innerHTML = `<img src='https://justcodeit.s3.eu-central-1.amazonaws.com/podcastsez4.png'  class="rounded" alt="light the way album cover" />`;
  } else {
    document.getElementById("albumOneArt").innerHTML =
      "Inlocuieste variabila <i>sezon4</i> din fisierul script.js pentru a se afisa corect acest album";
  }

  //Troubled Waters
  if (document.getElementById("albumTwo").innerHTML == "Sezonul 3") {
    document.getElementById(
      "albumTwo"
    ).innerHTML = `<img src='https://justcodeit.s3.eu-central-1.amazonaws.com/podcastsez3.png'  class="img-thumbnail" alt="Troubled Waters - Album Cover" /><h2 id="albumTwoTitle">Sezonul 3</h2><h3>2019</h3>`;
  } else {
    document.getElementById(
      "albumTwo"
    ).innerHTML = `<div id="albumTwoTitle">Inlocuieste variabila <i>sezon3</i> din fisierul script.js pentru a se afisa corect acest album</div>`;
  }

  //From Where I Stand
  if (document.getElementById("albumThree").innerHTML == "Sezonul 2") {
    document.getElementById(
      "albumThree"
    ).innerHTML = `<img src='https://justcodeit.s3.eu-central-1.amazonaws.com/podcastsez2.png' class="img-thumbnail"/><h2 id="albumThreeTitle">Sezonul 2</h2><h3>2018</h3>`;
  } else {
    document.getElementById(
      "albumThree"
    ).innerHTML = `<div id="albumThreeTitle">Inlocuieste variabila <i>sezon2</i> din fisierul script.js pentru a se afisa corect acest album </div>`;
  }

  //Lost at Sea
  if (document.getElementById("albumFour").innerHTML == "Sezonul 1") {
    document.getElementById(
      "albumFour"
    ).innerHTML = `<img src='https://justcodeit.s3.eu-central-1.amazonaws.com/podcastsez1.png' class="img-thumbnail"/><h2 id="albumFourTitle">Sezonul 1</h2><h3>2017</h3>`;
  } else {
    document.getElementById(
      "albumFour"
    ).innerHTML = `<div id="albumFourTitle">Inlocuieste variabila <i>sezon1</i> din fisierul script.js pentru a se afisa corect acest album</div>`;
  }
};
