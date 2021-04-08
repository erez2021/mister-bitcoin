
import './App.scss';
import BitcoinApp from './pages/BitcoinApp'
import {ContactPage} from './pages/ContactPage'
import { HashRouter as Router,  Route, Switch} from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { ContactDetails } from './cmps/ContactDetails/ContactDetails';
import { ContactEditPage } from './pages/ContactEditPage/ContactEditPage';

function App() {
  return (
    <Router>
    <div className="App">
      <AppHeader />
      <Switch>
      <Route component={ContactEditPage}  path='/contact/edit/:id?' />
      <Route component={ContactDetails}  path='/contact/:id' />
      <Route component={ContactPage}  path='/contact' />
      <Route component={BitcoinApp}  path='/' />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
