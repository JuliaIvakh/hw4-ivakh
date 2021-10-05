let operation = prompt("Which operation: add, sub, mult, div ?");
const firstNum = prompt("First number");
const secondNum = prompt("Second number");

let result;
if (operation == "add")
  (result = `${+firstNum + +secondNum}`),
    alert(`${firstNum} + ${secondNum} = ${result}`);
else if (operation == "sub")
  (result = `${+firstNum - +secondNum}`),
    alert(`${firstNum} - ${secondNum} = ${result}`);
else if (operation == "mult")
  (result = `${+firstNum * +secondNum}`),
    alert(`${firstNum} * ${secondNum} = ${result}`);
else if (operation == "div")
  (result = `${+firstNum / +secondNum}`),
    alert(`${firstNum} / ${secondNum} = ${result}`);
