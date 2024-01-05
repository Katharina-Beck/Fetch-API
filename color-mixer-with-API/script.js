const output = document.querySelector(".output");
const ranges = document.querySelectorAll("input[type=range]");
const colorCode = document.querySelector(".colorCode");

updateColor();
ranges.forEach((range) => range.addEventListener("input", updateColor));

function updateColor() {
  const color = `rgb(${ranges[0].value}, ${ranges[1].value}, ${ranges[2].value}) `;
  output.style.backgroundColor = color;
  colorCode.innerHTML = color;
}

btnRandom.addEventListener("click", function () {
  const p = fetch("https://dummy-apis.netlify.app/api/color");

  p.then((response) => {
    return response.json();
  }).then((data) => {
    ranges[0].value = data.rgb.r;
    ranges[1].value = data.rgb.g;
    ranges[2].value = data.rgb.b;

    updateColor();
  });
});
