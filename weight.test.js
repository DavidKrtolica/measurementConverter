const Weight = require('./Weight.js');


const testMeasureWeight = new Weight(1, 'metric');

test('converts weight from 1 kilogram to 2.20 pounds', () => {
    expect(testMeasureWeight.convert()).toBe('2.20 lbs');
});