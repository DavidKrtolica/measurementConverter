const fetch = require('node-fetch');

class Currency {
    constructor(baseCurrency) {
        if (typeof(baseCurrency) == 'string' && baseCurrency.length == 3) {
            this.baseCurrency = baseCurrency;
        } else {
            throw 'Invalid value for base currency - must be 3-letter format!';
        }
    }
    async convert(amountToConvert, destinationCurrency) {
        /* if (amountToConvert > 0) {
            if (typeof(destinationCurrency) == 'string' && destinationCurrency.length == 3) { */
                const response = await fetch(`https://api.currencyapi.com/v3/latest?apikey=yKiW7APVWuQjXeXH3m2TTFLn8dtk0LbsvXBvSOmv&base_currency=${this.baseCurrency}`);
                const json = await response.json();
                const currenciesData = json.data;
                const finalResult = currenciesData[destinationCurrency].value * amountToConvert;
                return `${amountToConvert}${this.baseCurrency} is equal to ${finalResult}${destinationCurrency}`;
            /*} else {
                throw 'Incorrect destination currency input!';
            }
        } else {
            throw 'Invalid value for amount to convert - must be a positive number higher than 0!';
        } */
    }
}

/* let testCurr = new Currency('USD');
console.log(await testCurr.convert(100, 'EUR')); */

module.exports = Currency;