let count = 0;

let clicks = (document.getElementById("clicks").value = count);
console.log(clicks);

function ButtonPressed() {
  count++;
  console.log(count);
  document.getElementById("clicks").innerHTML = count;
}

// function onmouseDown() {
//   count++;
//   document.getElementById("clicks").innerHTML = count;
// }

// rangeRed = document.getElementById("rangeRed");

// function changeColor() {}

// Create a funtion called changeColor,
// then get the values for each slider,
// then create a variable for RGB,
// then assign slider values for RGB,
// then apply to the background
