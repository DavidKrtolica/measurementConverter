const Temperature = require('./temperature.js');

//TESTING THROW ERRORS
test('the temp scale can only be celsius, fahrenheit or kelvin -- testing throw error', () => {
    expect(() => {
        new Temperature(32, 'someScale');    
    }).toThrow('Incorrect temperature scale!');
});

test('conversion with bad/incorrect destination scale throws error', () => {
    const testTemp = new Temperature(5, 'celsius');
    expect(() => {
        testTemp.convert('someScale');
    }).toThrow(`INCORRECT TEMPERATURE DESTINATION SCALE! YOU WROTE someScale AS DESTINATION SCALE...`);
});

//TESTING THE CONVERSIONS
test('conversion from celsius to fahrenheit', () => {
    const testTemp = new Temperature(5, 'celsius');
    const result = testTemp.convert('fahrenheit');
    expect(result).toBe('41.00 °F');
});

test('conversion from celsius to fahrenheit returns something (not null)', () => {
    const testTemp = new Temperature(5, 'celsius');
    const result = testTemp.convert('fahrenheit');
    expect(typeof(result)).toBeDefined();
});

test('conversion from celsius to fahrenheit returns string', () => {
    const testTemp = new Temperature(5, 'celsius');
    const result = testTemp.convert('fahrenheit');
    expect(typeof(result)).toBe('string');
});