//formulas C = (F-32)* (5/9)
// F = (C * (9/5)) + 32

const ftoc = function(f) {
  let celsius;
  celsius = (f-32)*(5/9);
  return (Math.round(celsius*10)/10);
};

const ctof = function(c) {
  let fahrenheit;
  fahrenheit = ((c * 9/5) + 32);
  return (Math.round(fahrenheit*10)/10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
