
import { logDOM } from '@testing-library/dom'
import { Component } from 'react'
import contactService from '../../services/contactService'

import './ContactEditPage.scss'

export class ContactEditPage extends Component {
    state= {
        contact: null
    }

    async componentDidMount() {   
        const id = this.props.match.params.id   

        const contact = id? await contactService.getContactById(id) : contactService.getEmptyContact()
        this.setState({contact}) 
    }

    handleChange = (ev) => {
        const field = ev.target.id
        const value = ev.target.value
        this.setState((prevState) => ({contact : { ...prevState.contact, [field]: value}}))
    }
     onSaveContact =  async (ev)  => {
        ev.preventDefault()
        console.log(this.state.contact);
        await contactService.saveContact({...this.state.contact})
         this.props.history.push('/contact')
    }
    onDeleteContact = async (contactId) => {
        await contactService.deleteContact(contactId)
        this.props.history.push('/contact')
    }
 
    render() {
        if (!this.state.contact) return <h2>No Contact.. </h2>
        const {name, phone, email} = this.state
        return (
            <div >
                <button className="delete-contact" onClick={() => this.onDeleteContact(this.state.contact._id)}>Delete Contact</button>
           <form className="contact-edit" onSubmit={this.onSaveContact} >
               <label htmlFor="name"   >Name</label>
               <input type="text"  id="name" value={name}  placeholder={this.state.contact.name}  onChange={this.handleChange} />
               <label htmlFor="phone"  >Phone   </label>
               <input type="text"  id="phone" value={phone} placeholder={this.state.contact.phone}  onChange={this.handleChange} />
               <label htmlFor="email">Email   </label>
               <input type="text"  id="email" value={email} placeholder={this.state.contact.email}  onChange={this.handleChange} />
           <button className="save-contact">Save Contact</button>
           </form>
            </div>
        )
    }
}
