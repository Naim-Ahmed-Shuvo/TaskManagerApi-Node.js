const {
  calculateTips,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add
} = require("../src/math.js");

test("Calculate the total", () => {
  const total = calculateTips(10, 0.3);
  expect(total).toBe(13);
});

test("Calculate the total with default tip", () => {
  const total = calculateTips(10);
  expect(total).toBe(12.5);
});

test('Should Convert 32 F to 0 C ',()=>{
    const temp = fahrenheitToCelsius(32);
    expect(temp).toBe(0)
})
test('Should Convert 0 C to 32 F ',()=>{
    const temp = celsiusToFahrenheit(0);
    expect(temp).toBe(32)
})


test('Add two numbers',()=>{
    add(2,3).then(sum=>expect(sum).toBe(5))
})
