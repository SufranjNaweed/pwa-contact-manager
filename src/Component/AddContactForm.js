import React, { Component } from 'react';

export default class AddContactForm extends Component{
    state = {
        name: '',
        username: '',
        email:'',
        website: '',
        phone: '',
    }

    updateStateForm = (e) => {
        const stateName = e.target.id;
        const stateValue = e.target.value;

        //console.log(stateName, stateValue);
        
        this.setState({[stateName] : stateValue});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name:  this.state.name,
            username: this.state.username,
            email: this.state.email,
            website: this.state.website,
            phone: this.state.phone
        }

        this.setState({
            name: '',
            username: '',
            email:'',
            website: '',
            phone: '',
        });

        //console.log(newContact);
        this.props.addContact(newContact);
    }

    render(){
        return(
            <div className="form-container">
                <form action="" className="AddNewContact" onSubmit={this.onSubmit}>
                    <input 
                        id='name'
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={this.state.name}
                        onChange={this.updateStateForm}
                    />
                    <input 
                        id='username'
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={this.state.username}
                        onChange={this.updateStateForm}
                    />
                    <input 
                        id='website'
                        type="text" 
                        name="website" 
                        placeholder="Website"
                        value={this.state.website}
                        onChange={this.updateStateForm}
                    />
                    <input 
                        id='phone'
                        type="text" 
                        name="phone" 
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.updateStateForm}
                    />
                    <input 
                        id='email'
                        type="text" 
                        name="email" 
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.updateStateForm}
                    />

                    <input 
                        type="submit" 
                        value="New Contact" 
                        className="btn"
                    />
                </form>
            </div>
        )
    }
}