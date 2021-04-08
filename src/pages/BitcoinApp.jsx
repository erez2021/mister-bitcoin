import { Component } from 'react'
import { userService } from '../services/userService'
import { Chart } from '../cmps/Chart'
import { bitcoinService} from '../services/bitcoinService'
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default class BitcoinApp extends Component {

  state = {
    user: null,
    rate: null,
    marketPrice: null,
    transaction: null
  }

  componentDidMount() {
    this.getMarketPrice()
    this.loadUser()
    this.userValue()
    this.getConfirmedTransactions()
  }

  loadUser = () => {
    const user = userService.getUser()
    this.setState({ user })
  }

  getMarketPrice = async () => {
    const marketPrice = await bitcoinService.getMarketPrice()
    this.setState({ marketPrice })
  }

  getConfirmedTransactions = async () => {
    const transaction = await bitcoinService.getConfirmedTransactions()
    this.setState({ transaction})
  }

   userValue =async () => {
     var rate = await bitcoinService.getRate()
     rate = (1/rate).toFixed(2)
     this.setState({ rate})

  }

  get priceForChart() {
    return this.state.marketPrice.map(item => item.y)
  }

  get transactionForChart() {
    return this.state.transaction.map(item => item.y)
  }

  

  render() {

    return (
      <div className="bitcoin-app">
        <div className="user-card">
          <div className="user-name-row"> <h3>Hello </h3>  {this.state.user && <div className="user-name"> {this.state.user.name}!</div>}</div>
          {this.state.user && <div className="coins">Coins: {this.state.user.coins} </div>}
          {this.state.rate && <div className="BTC">BTC: {this.state.rate}$ </div>}
        </div>
        <h1>BITCOIN</h1> <h3>Charts for last 3 monthes  </h3>
        <div className="chart"> 
        <h2>Market price</h2>
        {this.state.marketPrice && <Sparklines data={this.priceForChart} width={200} height={40}>
          <SparklinesLine color="blue" />
        </Sparklines>}
        </div>
        <div className="chart"> 
        <h2>transaction</h2>
        {this.state.transaction && <Sparklines data={this.transactionForChart} width={200} height={40}>
          <SparklinesLine color="green" />
        </Sparklines>}
        </div>
        {/* <Chart marketPrice={this.state.marketPrice} /> */}
      </div>
    )
  }
}