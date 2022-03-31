class Measure {
    constructor(measureValue, measureSystem) {
        if (measureValue <= 0) {
            throw 'Cannot create an object if measure value which is zero or negative!';
        } else {
            this.measureValue = measureValue;
        }
        if (measureSystem == 'metric' || measureSystem == 'imperial') {
            this.measureSystem = measureSystem;
        } else {
            throw 'Incorrect type of measurement system provided!';
        }
    }
    
    convert() {
        if (this.measureSystem == 'imperial' && this.constructor.name == 'Length') {
            this.measureValue =  this.measureValue * 2.54;
            return `${this.measureValue.toFixed(2)} cm`;
        } else if (this.measureSystem == 'metric' && this.constructor.name == 'Length') {
            this.measureValue = this.measureValue / 2.54;
            return `${this.measureValue.toFixed(2)} in`;
        } else if (this.measureSystem == 'imperial' && this.constructor.name == 'Weight') {
            this.measureValue =  this.measureValue / 2.204623;
            return `${this.measureValue.toFixed(2)} kg`;
        } else if (this.measureSystem == 'metric' && this.constructor.name == 'Weight') {
            this.measureValue =  this.measureValue * 2.204623;
            return `${this.measureValue.toFixed(2)} lbs`;
        } else {
            throw `INCORRECT MEASUREMENT SYSTEM!\nINITIAL VALUE: ${this.measureValue} IN THE "${this.measureSystem}" SYSTEM`;
        }
    }
}


module.exports = Measure;