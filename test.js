const message = require('./app');  

test('check message', () => {
  expect(message()).toBe("hello,world");
});