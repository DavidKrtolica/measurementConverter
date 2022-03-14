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
    convert(amountToConvert, destinationCurrency) {
        fetch(`https://api.currencyapi.com/v3/latest?apikey=yKiW7APVWuQjXeXH3m2TTFLn8dtk0LbsvXBvSOmv&base_currency=${this.baseCurrency}`)
        .then(res => res.json())
        .then(json => {
            const destionationCurrencyData = json.data[destinationCurrency];
            const finalResult = amountToConvert * destionationCurrencyData.value;
            return finalResult;
        });
    }
}

let currencyDKK = new Currency('DKK');
let conversionDKK_USD = currencyDKK.convert(100, 'USD');
console.log(conversionDKK_USD);