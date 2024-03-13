const capitalize = require('./script.js');

test('makes first letter capital', () => {
    expect(capitalize('alpha')).toBe('Alpha');
});

// const reverseString = require('./script.js');

// test('reverses string', () => {
//     expect(reverseString('Hello')).toBe('olleH')
// })