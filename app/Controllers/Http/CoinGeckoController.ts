import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CoinGeckoServices from 'App/Services/coinGecko';

export default class CoinGeckoController {    
    

    public async index(ctx: HttpContextContract) {       
       
        return CoinGeckoServices.getBitcoinPrices();
    }

    public async checkId(ctx: HttpContextContract){

        const id = ctx.request.param('id');

        try {
            const getEspecificCurrency = await CoinGeckoServices.getBitctoinPrice(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${id}&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false`);

            if(getEspecificCurrency.current_price == '' && getEspecificCurrency.last_updated == ''){
                let msg = `A sigla (${id}) da moeda enviada não existe tente outra!`;
                return msg;
            }
            return getEspecificCurrency;
        } catch (error) {
            console.log(error);
        }
    }
}