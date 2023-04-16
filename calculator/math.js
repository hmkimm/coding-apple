let numOne = "";
let operator = "";
let numTwo = "";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");
const onClickNumber = (number) => {
  if (operator) {
    numTwo += number;
  } else {
    numTwo += number;
  }
  $result.value += number;
};

document.querySelector("#num-0").addEventListener("click", onClickNumber(0));

document.querySelector("#num-1").addEventListener("click", (number) => {
  if (operator) {
    //비어있지 않다
    numTwo += number;
  } else {
    numOne += number;
  }
  $result.value += number;
});
document.querySelector("#num-2").addEventListener("click", (number) => {
  if (operator) {
    //비어있지 않다
    numTwo += number;
  } else {
    numOne += number;
  }
  $result.value += number;
});
document.querySelector("#num-3").addEventListener("click", (number) => {
  if (operator) {
    //비어있지 않다
    numTwo += number;
  } else {
    numOne += number;
  }
  $result.value += number;
});
document.querySelector("#num-4").addEventListener("click", (number) => {
  if (operator) {
    //비어있지 않다
    numTwo += number;
  } else {
    numOne += number;
  }
  $result.value += number;
});
document.querySelector("#num-5").addEventListener("click", () => {
  if (operator) {
    //비어있지 않다
    numTwo += 5;
  } else {
    numOne += 5;
  }
  $result.value += 5;
});
document.querySelector("#num-6").addEventListener("click", () => {
  if (operator) {
    //비어있지 않다
    numTwo += 6;
  } else {
    numOne += 6;
  }
  $result.value += 6;
});
document.querySelector("#num-7").addEventListener("click", () => {
  if (operator) {
    //비어있지 않다
    numTwo += 7;
  } else {
    numOne += 7;
  }
  $result.value += 7;
});
document.querySelector("#num-8").addEventListener("click", () => {
  if (operator) {
    //비어있지 않다
    numTwo += 8;
  } else {
    numOne += 8;
  }
  $result.value += 8;
});
document.querySelector("#num-9").addEventListener("click", () => {
  if (operator) {
    //비어있지 않다
    numTwo += 9;
  } else {
    numOne += 9;
  }
  $result.value += 9;
});
document.querySelector("#plus").addEventListener("click", () => {});
document.querySelector("#minus").addEventListener("click", () => {});
document.querySelector("#divide").addEventListener("click", () => {});
document.querySelector("#multiply").addEventListener("click", () => {});
document.querySelector("#calculate").addEventListener("click", () => {});
document.querySelector("#clear").addEventListener("click", () => {});
