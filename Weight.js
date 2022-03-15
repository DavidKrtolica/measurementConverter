const Measure = require('./Measure.js');

class Weight extends Measure  {
    constructor(measureValue, measureSystem) {
        super(measureValue, measureSystem);
    }
}

module.exports = Weight;