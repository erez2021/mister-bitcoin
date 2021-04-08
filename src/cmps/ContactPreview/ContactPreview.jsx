

import {Link} from 'react-router-dom'
import './ContactPreview.scss'

export function ContactPreview({ contact }) {

    function makeId(length = 3) {
        var txt = ''
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (var i = 0; i < length; i++) {
            txt += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        return txt
    }

    return (
        <Link to={'/contact/' + contact._id}>
        <div className="contact-preview">
            <img src={`https://robohash.org/${makeId()}`} className="random-img" alt="img" />
            {contact.name}
        </div>
        </Link>
    )
}

