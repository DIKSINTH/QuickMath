const display = document.getElementById("display");
function append(value) {
  display.textContent += value;
}
function clearDisplay() {
  display.textContent = "";
}
function backspace() {
  display.textContent = display.textContent.slice(0, -1);
}
function calculate() {
  try {
    let result = eval(display.textContent);
    display.textContent = result;
  } catch (error) {
    display.textContent = "Error";
  }
}
