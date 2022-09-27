"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class CoinGeckoServices {
    static async getBitcoinPrices() {
        let currency = {
            coin: 'bitcoin',
            current_price: '',
            last_updated: ''
        };
        await axios_1.default.get(`https://api.coingecko.com/api/v3/coins/${currency.coin}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`).then((response) => {
            currency.current_price = response.data.market_data.current_price;
            currency.last_updated = response.data.last_updated;
        }).catch((error) => {
            console.log(error);
        });
        return currency;
    }
    static async getBitctoinPrice(url) {
        let currency = {
            coin: 'bitcoin',
            current_price: '',
            last_updated: ''
        };
        const config = {
            method: 'get',
            url,
        };
        await (0, axios_1.default)(config).then((response) => {
            currency.current_price = response.data[0].current_price;
            currency.last_updated = response.data[0].last_updated;
        }).catch((error) => {
            console.log(error.response.data);
        });
        return currency;
    }
}
exports.default = CoinGeckoServices;
//# sourceMappingURL=CoinGecko.js.map