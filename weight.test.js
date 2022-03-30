const Weight = require('./Weight.js');

//TESTING THROWN ERRORS FOR WRONG MEASURE VALUE/SYSTEM INITIALIZATION
test('the weight value cannot be a negative number -- testing throw error', () => {
    expect(() => {
        new Weight(-3, 'metric');    
    }).toThrow('Cannot create an object if measure value which is zero or negative!');
});

test('the weight value cannot be a zero -- testing throw error', () => {
    expect(() => {
        new Weight(0, 'imperial');    
    }).toThrow('Cannot create an object if measure value which is zero or negative!');
});

test('the weight system can only be metric or imperial -- testing throw error', () => {
    expect(() => {
        new Weight(3, 'someSystem');    
    }).toThrow('Incorrect type of measurement system provided!');
});

test(' -- testing both throw errors --', () => {
    expect(() => {
        new Weight(-3, 'someSystem');    
    }).toThrow('Cannot create an object if measure value which is zero or negative!', 'Incorrect type of measurement system provided!');
});

//TESTING THE CONVERSION METHOD WHICH TURNS KG TO LBS AND VICE-VERSA
//ALSO TESTING THE RETURNED OBJECT IS NOT NULL, NOT ZERO AND NOT NEGATIVE
test('converts weight from 1 kilogram to 2.20 pounds', () => {
    const testMeasureWeight = new Weight(1, 'metric');
    expect(testMeasureWeight.convert()).toBe('2.20 lbs');
});

test('converts weight from 2.20 pounds to 1 kilogram', () => {
    const testMeasureWeight = new Weight(2.20, 'imperial');
    expect(testMeasureWeight.convert()).toBe('1.00 kg');
});

test('conversion weight value not to be null', () => {
    const testMeasureWeight = new Weight(2.20, 'imperial');
    expect(testMeasureWeight.convert()).toBeDefined();
});

test('conversion weight function to return a string', () => {
    const testMeasureWeight = new Weight(344.45, 'metric');
    expect(typeof(testMeasureWeight.convert())).toEqual('string');
});

test('converted weight not to be a zero or a negative number', () => {
    const testMeasureWeight = new Weight(67.56756, 'imperial');
    const convertedWeight = parseFloat((testMeasureWeight.convert()).replace(/[^0-9-]/g, ''));
    expect(convertedWeight).toBeGreaterThan(0);
});

test('converted weight not to be a zero or a negative number', () => {
    const testMeasureWeight = new Weight(30.0445, 'metric');
    const convertedWeight = parseFloat((testMeasureWeight.convert()).replace(/[^0-9-]/g, ''));
    expect(convertedWeight).toBeGreaterThan(0);
});