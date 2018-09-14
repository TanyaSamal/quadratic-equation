module.exports = function solveEquation(equation) {
  let index1 = equation.indexOf("x^2");

  let a = equation.substring(0, index1 - 2 ).trim();
  if (a[0] == "-") {
    a = (-1) * parseInt(a.substring(1));
  } else {
    a = parseInt(a);
  }
  console.log(a);
  let index2 = equation.indexOf(" x ");

  let b = equation.substring(index1 + 3, index2 - 2).trim();

  if (b[0] == "-") {
    b = (-1) * parseInt(b.substring(1));
  } else {
    b = parseInt(b.substring(1));
  }

  let c = equation.substring(index2 + 2).trim();
  if (c[0] == "-") {
    c = (-1) * parseInt(c.substring(1));
  } else {
    c = parseInt(c.substring(1));
  }

  let resolve = [];

  let discriminant = Math.sqrt(b * b - 4 * a * c);

  resolve[0] = Math.round( (-b + discriminant) / (2 * a));
  resolve[1] = Math.round( (-b - discriminant) / (2 * a));

  resolve.sort((a, b) => a - b);

  return resolve;
}
