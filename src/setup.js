// You do not need to edit this file.
window.setup = (first, second, third, fourth) => {
  document.getElementById("albumOne").innerHTML = first;
  document.getElementById("albumTwo").innerHTML = second;
  document.getElementById("albumThree").innerHTML = third;
  document.getElementById("albumFour").innerHTML = fourth;
  window.albumOne = first;
  window.albumTwo = second;
  window.albumThree = third;
  window.albumFour = fourth;
};
