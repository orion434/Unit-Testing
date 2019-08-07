const {sum, product} = require('./sketch');

//test('adds 1 + 2 to equal 3', () => {
//  expect(sum(1, 2)).toBe(3);
//});


test('adds 1 + 2 to equal 3', sumTest);
function sumTest() {
  expect(sum(1, 2)).toBe(3);
};

test('product of 6 * 7 to equal 42', productTest);
function productTest() {
  expect(product(6, 7)).toBe(42);
};

test('product of 0 * 7 to equal 0', () => {
  expect(product(0, 7)).toBe(0);
});

test('product of 0 * 0 to equal 0', () => {
  expect(product(0, 0)).toBe(0);
});