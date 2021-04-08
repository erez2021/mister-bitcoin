

import { NavLink, withRouter } from 'react-router-dom'
// import { eventBusService } from '../../services/eventBusService'
import './AppHeader.scss'

const _AppHeader = (props) => {
    // eventBusService.emit('navbar-render', 'hi')
    return (
        <div className="app-header">
          
            <ul className="header-links">
                <li><NavLink exact to="/" activeClassName="active-nav">HOME</NavLink></li>
                <li ><NavLink className="navlink" to="/contact" activeClassName="active-nav" >CONTACTS</NavLink></li>
            </ul>
        </div>
    )
}

export const AppHeader = withRouter(_AppHeader)

