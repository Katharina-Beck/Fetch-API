const output = document.querySelector(".output");
const ranges = document.querySelectorAll("input[type=range]");
const colorCode = document.querySelector(".colorCode");

updateColor();
ranges.forEach((range) => range.addEventListener("input", updateColor));

function updateColor() {
  console.log("hallo");
  const color = `rgb(${ranges[0].value}, ${ranges[1].value}, ${ranges[2].value}) `;
  output.style.backgroundColor = color;
  colorCode.innerHTML = color;
}
