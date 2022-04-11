const Currency = require('./currency.js');

//TESTING THROW ERRORS
test('incorrect base currency value to throw error', () => {
    expect(() => {
        new Currency('danish krone');
    }).toThrow('Invalid value for base currency - must be 3-letter format!');
});

test('incorrect base currency value to throw error', () => {
    expect(() => {
        new Currency('US DOLLAR');
    }).toThrow('Invalid value for base currency - must be 3-letter format!');
});

/* test('incorrect amount value conversion to throw error', () => {
    expect(() => {
        let testCurr = new Currency('USD');
        let result = await testCurr.convert(-150, 'EUR');
    }).toThrow('Invalid value for amount to convert - must be a positive number higher than 0!');
}); */