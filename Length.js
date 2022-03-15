const Measure = require('./Measure.js');

class Length extends Measure  {
    constructor(measureValue, measureSystem) {
        super(measureValue, measureSystem);
    }
}

module.exports = Length;