const Length = require('./Length.js');


const testMeasureLength = new Length(1, 'imperial');

test('converts lenght from 1 inch to 2.54 centimeters', () => {
    expect(testMeasureLength.convert()).toBe('2.54 cm');
});