class Temperature {
    constructor(tempValue, tempScale) {
        this.tempValue = tempValue;
        this.tempScale = tempScale;
    }
    convert(scaleDest) {
        switch (this.tempScale) {
            case 'celsius':
                if (scaleDest == 'fahrenheit') {
                    this.tempValue = this.tempValue * 1.8 + 32;
                    return `${this.tempValue.toFixed(2)} °F`;
                } else if (scaleDest == 'kelvin') {
                    this.tempValue = this.tempValue + 273.15;
                    return `${this.tempValue.toFixed(2)} K`;
                } else {
                    console.log(`INCORRECT TEMPERATURE DESTINATION SCALE! YOU WROTE ${scaleDest} AS DESTINATION SCALE...`);
                }
                break;

            case 'fahrenheit':
                if (scaleDest == 'celsius') {
                    this.tempValue = (this.tempValue - 32) / 1.8;
                    return `${this.tempValue.toFixed(2)} °C`;
                } else if (scaleDest == 'kelvin') {
                    this.tempValue = (this.tempValue + 459.67) * (5 / 9);
                    return `${this.tempValue.toFixed(2)} K`;
                } else {
                    console.log(`INCORRECT TEMPERATURE DESTINATION SCALE! YOU WROTE ${scaleDest} AS DESTINATION SCALE...`);
                }
                break;

            case 'kelvin':
                if (scaleDest == 'celsius') {
                    this.tempValue = this.tempValue - 273.15;
                    return `${this.tempValue.toFixed(2)} °C`;
                } else if (scaleDest == 'fahrenheit') {
                    this.tempValue = this.tempValue  * (9 / 5) - 459.67;
                    return `${this.tempValue.toFixed(2)} °F`;
                } else {
                    console.log(`INCORRECT TEMPERATURE DESTINATION SCALE! YOU WROTE ${scaleDest} AS DESTINATION SCALE...`);
                }
                break;
        }
    }
}

module.exports = Temperature;