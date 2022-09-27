const button = document.getElementById("button");
const bg = document.querySelector("body");

function randomNum() {
  return `#${Math.floor(Math.random() * 1516)}`;
}


button.addEventListener("click", function () {
console.log(randomNum());
  bg.style.backgroundColor = randomNum();
  // button.style.backgroundColor = randomNum();
});
