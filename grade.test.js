const Grade = require('./grade.js');

//TESTING THROWN ERRORS
test('the grade value system is DK, grade must be between -3 and 12 -- testing throw error', () => {
    expect(() => {
        new Grade(-5, 'DK');    
    }).toThrow('Invalid grade value!');
});

test('the grade value system is DK, grade must be between -3 and 12 -- testing throw error', () => {
    expect(() => {
        new Grade(14, 'DK');    
    }).toThrow('Invalid grade value!');
});

test('the grade value system is USA, grade must be A+/A/B/C/D/F -- testing throw error', () => {
    expect(() => {
        new Grade('T', 'USA');    
    }).toThrow('Invalid grade value!');
});

test('the grade value system is USA, grade must be A+/A/B/C/D/F -- testing throw error', () => {
    expect(() => {
        new Grade('Z', 'USA');    
    }).toThrow('Invalid grade value!');
});

test('the grade value system is incorrect -- testing throw error', () => {
    expect(() => {
        new Grade('A', 'America');    
    }).toThrow('Invalid grade system input!');
});

test('the grade value system is incorrect -- testing throw error', () => {
    expect(() => {
        new Grade(7, 'India');    
    }).toThrow('Invalid grade system input!');
});

//CONVERSION TESTS
test('conversion from DK to USA', () => {
    const testGrade = new Grade(4, 'DK');
    const result = testGrade.convert();
    expect(result).toBe('4 in DK is equal to C');
});

test('conversion from USA to DK', () => {
    const testGrade = new Grade('A', 'USA');
    const result = testGrade.convert();
    expect(result).toBe('A in USA is equal to 10');
});

test('conversion from DK to USA', () => {
    const testGrade = new Grade(4, 'DK');
    const result = testGrade.convert();
    expect(typeof(result)).toBe('string');
});

test('conversion from DK to USA', () => {
    const testGrade = new Grade(4, 'DK');
    const result = testGrade.convert();
    expect(result).toBeDefined();
});

test('conversion from DK to USA', () => {
    const testGrade = new Grade(4, 'DK');
    expect(testGrade).toBeDefined();
});