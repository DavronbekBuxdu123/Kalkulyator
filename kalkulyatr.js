let input1 = document.getElementById("input1");
let end_ = null;

function a(qiymat) {
  if (amal(qiymat) && amal(end_)) {
    input1.value = input1.value.slice(0, -1) + qiymat;
  } else {
    input1.value += qiymat;
  }

  if (amal(qiymat)) {
    end_ = qiymat;
  } else {
    end_ = null;
  }

  if (!amal(qiymat)) {
    end_ = qiymat;
  }
  if (qiymat === "." && !input1.value.slice(0, -1).includes(".")) {
    return input1.value;
  }
}

function amal(char) {
  return ["+", "-", "*", "/", "."].includes(char);
}

function calculate() {
  input1.value = eval(input1.value);
}

function remove() {
  input1.value = "";
  end_ = null;
}

function slice() {
  input1.value = input1.value.slice(0, -1);
}

function foiz() {
  input1.value = input1.value / 100;
}

function plus_minus() {
  if (input1.value > 0) {
    input1.value = -input1.value;
  } else if (input1.value < 0) {
    input1.value = -input1.value;
  } else {
    input1.value = 0;
  }
}
