const btn = document.getElementById("change-color-btn");
const colorValue = document.getElementById("color-value");

function generateRandomColor() {
  return Math.floor(Math.random() * (255 - 1 + 1) + 1).toString(16);
}

btn.addEventListener("click", () => {
  const color = `#${generateRandomColor()}${generateRandomColor()}${generateRandomColor()}`;
  document.body.style.backgroundColor = color;

  colorValue.textContent = color;
});
