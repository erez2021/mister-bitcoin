import { Link } from 'react-router-dom'
import { Component } from 'react'
import contactService from '../../services/contactService'
import { ContactPage } from '../../pages/ContactPage/ContactPage'
import './ContactDetails.scss'

export class ContactDetails extends Component {
    state = {
        contact: null
    }

    async componentDidMount() {
        this.loadContact()
    }

    componentDidUpdate(prevProps){
    
        if(prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }

    async loadContact() {
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({ contact })
    }

    nextContact = async () => {
        var nextContact = await contactService.getContactById(this.state.contact._id)
        console.log(nextContact._id);
        this.props.history.push('/contact/' + nextContact._id)  
        this.loadContact()
    }



    render() {
        const { contact } = this.state
        if (!contact) return <li>no contact </li>
        return (
            <div>
                <Link to='/contact'> Back </Link>
                <ul className="contact-details">
                    <img src={`https://robohash.org/${contact._id}`} alt="" />
                    <li className="contact-card">{contact.name} </li>
                    <li className="contact-card">{contact.email} </li>
                    <li className="contact-card">{contact.phone} </li>
                    <Link to={'/contact/edit/' + contact._id}> Edit </Link>
                    <button onClick={this.nextContact}>Next Contact</button>
                </ul>

            </div>
        )
    }
}
