import fetch from "node-fetch";

export class Measure {
    constructor(measureValue, measureSystem) {
        this.measureValue = measureValue;
        this.measureSystem = measureSystem;
    }
    convert() {
        if (this.measureSystem == 'imperial' && this.constructor.name == 'Lenght') {
            this.measureValue =  this.measureValue * 2.54;
            return `${this.measureValue.toFixed(2)} cm`;
        } else if (this.measureSystem == 'metric' && this.constructor.name == 'Lenght') {
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

export class Lenght extends Measure  {
    constructor(measureValue, measureSystem) {
        super(measureValue, measureSystem);
    }
}

export class Weight extends Measure  {
    constructor(measureValue, measureSystem) {
        super(measureValue, measureSystem);
    }
}

/* let lenght1 = new Lenght(1, 'imperial');
let lenght2 = new Lenght(2.54, 'metric');
let weight1 = new Weight(1, 'metric');
let weight2 = new Weight(2.20, 'imperial');
console.log(lenght1.convert());
console.log(lenght2.convert());
console.log(weight1.convert());
console.log(weight2.convert()); */


export class Temperature {
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

/* let temp1 = new Temperature(300, 'kelvin');
console.log(temp1.convert('fahrenheit'));

let temp2 = new Temperature(20, 'celsius');
console.log(temp2.convert('kelvin')); */


export class Currency {
    constructor(baseCurrency) {
        this.baseCurrency = baseCurrency;
    }
    async convert(amountToConvert, destinationCurrency) {
        const response = await fetch(`https://api.currencyapi.com/v3/latest?apikey=yKiW7APVWuQjXeXH3m2TTFLn8dtk0LbsvXBvSOmv&base_currency=${this.baseCurrency}`);
        const json = await response.json();
        const currenciesData = json.data;
        const finalResult = currenciesData[destinationCurrency].value * amountToConvert;
        return `${amountToConvert}${this.baseCurrency} is equal to ${finalResult}${destinationCurrency}`;
    }
}

/* let currencyDKK = new Currency('HRK');
console.log(await currencyDKK.convert(754, 'EUR')); */ // HAS TO USE AWAIT BECAUSE THE FETCH API FUNCTION IS AN ASYNC FUNCTION 

export class Grade {
    convert(gradeToConvert, gradeSystem) {
        let convertedGrade;
        switch (gradeSystem) {
            case 'DK':
                if (gradeToConvert == 12) {
                    convertedGrade = 'A+';
                } else if (gradeToConvert == 10) {
                    convertedGrade = 'A';
                } if (gradeToConvert == 7) {
                    convertedGrade = 'B';
                } else if (gradeToConvert == 4) {
                    convertedGrade = 'C';
                } else if (gradeToConvert == 2) {
                    convertedGrade = 'D';
                } else if (gradeToConvert == 0 || gradeToConvert == -3) {
                    convertedGrade = 'F';
                }
                break;

            case 'USA':
                if (gradeToConvert == 'A+') {
                    convertedGrade = 12;
                } else if (gradeToConvert == 'A') {
                    convertedGrade = 10;
                } if (gradeToConvert == 'B') {
                    convertedGrade = 7;
                } else if (gradeToConvert == 'C') {
                    convertedGrade = 4;
                } else if (gradeToConvert == 'D') {
                    convertedGrade = 2;
                } else if (gradeToConvert == 'F') {
                    convertedGrade = [0, -3];
                }
                break;
        }
        return `${gradeToConvert} in ${gradeSystem} is equal to ${convertedGrade}`;
    }
}

/* let grade1 = new Grade();
console.log(grade1.convert('F', 'USA')); */