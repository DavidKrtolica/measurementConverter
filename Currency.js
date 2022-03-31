const fetch = require('node-fetch');

class Currency {
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


module.exports = Currency;