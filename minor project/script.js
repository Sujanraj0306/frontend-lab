let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function squareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = 'Error';
  }
}

function square() {
  try {
    let val = eval(display.value);
    display.value = val * val;
  } catch {
    display.value = 'Error';
  }
}

function log() {
  try {
    display.value = Math.log10(eval(display.value));
  } catch {
    display.value = 'Error';
  }
}

function sin() {
  try {
    display.value = Math.sin(toRadians(eval(display.value)));
  } catch {
    display.value = 'Error';
  }
}

function cos() {
  try {
    display.value = Math.cos(toRadians(eval(display.value)));
  } catch {
    display.value = 'Error';
  }
}

function tan() {
  try {
    display.value = Math.tan(toRadians(eval(display.value)));
  } catch {
    display.value = 'Error';
  }
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
