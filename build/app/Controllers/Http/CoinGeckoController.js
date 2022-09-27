"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CoinGecko_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Services/CoinGecko"));
class CoinGeckoController {
    async index() {
        return CoinGecko_1.default.getBitcoinPrices();
    }
    async checkId(ctx) {
        const currencies = [
            "btc",
            "eth",
            "ltc",
            "bch",
            "bnb",
            "eos",
            "xrp",
            "xlm",
            "link",
            "dot",
            "yfi",
            "usd",
            "aed",
            "ars",
            "aud",
            "bdt",
            "bhd",
            "bmd",
            "brl",
            "cad",
            "chf",
            "clp",
            "cny",
            "czk",
            "dkk",
            "eur",
            "gbp",
            "hkd",
            "huf",
            "idr",
            "ils",
            "inr",
            "jpy",
            "krw",
            "kwd",
            "lkr",
            "mmk",
            "mxn",
            "myr",
            "ngn",
            "nok",
            "nzd",
            "php",
            "pkr",
            "pln",
            "rub",
            "sar",
            "sek",
            "sgd",
            "thb",
            "try",
            "twd",
            "uah",
            "vef",
            "vnd",
            "zar",
            "xdr",
            "xag",
            "xau",
            "bits",
            "sats"
        ];
        const id = ctx.request.param('id');
        if (!currencies.includes(id)) {
            let msg = `A sigla (${id}) da moeda enviada não existe tente outra!`;
            return msg;
        }
        try {
            const getEspecificCurrency = await CoinGecko_1.default.getBitctoinPrice(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${id}&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
            return getEspecificCurrency;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = CoinGeckoController;
//# sourceMappingURL=CoinGeckoController.js.map