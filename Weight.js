const Measure = require('./measure.js');

class Weight extends Measure  {
    constructor(measureValue, measureSystem) {
        super(measureValue, measureSystem);
    }
}


module.exports = Weight;