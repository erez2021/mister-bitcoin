import axios from 'axios'

const RATE_KEY = 'bitcoin-rate'
const PRICE_KEY = 'market-price'
const TRANSACTION_KEY = 'transaction'

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

function getMarketPrice() {
    var marketPrice = JSON.parse(localStorage.getItem(PRICE_KEY))
    if (!marketPrice) {
        return axios.get(`https://api.blockchain.info/charts/market-price?timespan=3months&format=json&cors=true`)
            .then(res => {
                console.log('Service Got Res:', res.data.values);
                marketPrice = res.data.values;
                localStorage.setItem(PRICE_KEY, JSON.stringify(marketPrice))

            })
            .catch(err => {
                console.log('Service got Error:cannot get market price', err);
            })
    } return marketPrice
}

function getRate() {
    var bitcoinRate = JSON.parse(localStorage.getItem(RATE_KEY))
    if (!bitcoinRate) {
        return axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
            .then(res => {
                console.log('Service Got Res:', res);
                bitcoinRate = res.data.values;
                localStorage.setItem(RATE_KEY, JSON.stringify(bitcoinRate))

            })
            .catch(err => {
                console.log('Service got Error:cannot get rate', err);
            })
    } return bitcoinRate
}



function getConfirmedTransactions() {
    var transaction = JSON.parse(localStorage.getItem(TRANSACTION_KEY)) 
    if (!transaction) {
        return axios.get(`https://api.blockchain.info/charts/n-transactions?timespan=3months&format=json&cors=true`)
        .then(res => {
            console.log('Service Got Res:', res);
            transaction = res.data.values
      
            localStorage.setItem(TRANSACTION_KEY, JSON.stringify(transaction))
        })
        .catch(err => {
            console.log('Service got Error:cannot get rate', err);
        })
    } return transaction
}