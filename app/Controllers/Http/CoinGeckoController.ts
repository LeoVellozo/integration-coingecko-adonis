import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CoinGeckoServices from 'App/Services/coinGecko';

export default class CoinGeckoController {    
    

    public async index() {       
       
        return CoinGeckoServices.getBitcoinPrices();
    }

    public async checkId(ctx: HttpContextContract){

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
          ]
        const id = ctx.request.param('id');
        
          if(!currencies.includes(id)){
            let msg = `A sigla (${id}) da moeda enviada não existe tente outra!`;
            return msg;
          }

        try {
            const getEspecificCurrency = await CoinGeckoServices.getBitctoinPrice(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${id}&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false`);

            return getEspecificCurrency;
        } catch (error) {
            console.log(error);
        }
    }
}