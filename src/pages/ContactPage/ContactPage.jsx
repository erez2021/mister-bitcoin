
import { Component } from 'react'
import  contactService  from '../../services/contactService'
import  {ContactList } from '../../cmps/ContactList'
import  {ContactDetails } from '../../cmps/ContactDetails'
import  {ContactFilter } from '../../cmps/ContactFilter'
import {Link} from 'react-router-dom'


import './ContactPage.scss'

export class ContactPage extends Component {

    state = {
        contacts: null,
        filterBy: null
      }
    
      componentDidMount() {
        this.loadContacts()
      }

      onChangeFilter = (filterBy) =>{
        
        this.setState({ filterBy}, this.loadContacts)
      }

     async  loadContacts() {
        const contacts = await contactService.getContacts(this.state.filterBy)
        this.setState({ contacts })
      }


    
    render() {
 
        return (
            <div>
        <ContactFilter onChangeFilter={this.onChangeFilter} />
        <Link  to={'/contact/edit/'}> Add Contact </Link>
       <ContactList  contacts={this.state.contacts} />
    
            </div>
        )
    }
}
