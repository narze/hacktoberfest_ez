const calculate = (x: number, y: number, operator: "+" | "-" | "*" | "/") => {
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    default:
      return x / y;
  }
};
