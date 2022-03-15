class Measure {
    constructor(measureValue, measureSystem) {
        this.measureValue = measureValue;
        this.measureSystem = measureSystem;
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
            console.log(`INCORRECT MEASUREMENT SYSTEM!\nINITIAL VALUE: ${this.measureValue} IN THE "${this.measureSystem}" SYSTEM`);
        }
    }
}

module.exports = Measure;