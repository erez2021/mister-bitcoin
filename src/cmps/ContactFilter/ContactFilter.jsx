
import { Component } from 'react'

import './ContactFilter.scss'

export class ContactFilter extends Component {

    state= {
        term: ''
    }

    handleChange =(ev) => {
        const field = ev.target.name
        const value = ev.target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter({...this.state})
        })
    }

    render() {
        const { term} = this.state
        return (
            <div>
            <form onSubmit={(ev) => ev.preventDefault()}>
           
            <input type="text" name="term" placeholder="search" value={term} onChange={this.handleChange} />
            
            </form>
            </div>
        )
    }
}
