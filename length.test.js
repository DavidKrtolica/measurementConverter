const Length = require('./length.js');

test('converts lenght from 1 inch to 2.54 centimeters', () => {
    const testMeasureLength = new Length(1, 'imperial');
    expect(testMeasureLength.convert()).toBe('2.54 cm');
});