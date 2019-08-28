import React, { Component } from 'react';
import { ETIME } from 'constants';

export default class AddContact extends Component{
    state = {
        name: '',
        username: '',
        email:'',
        website: '',
        phone: '',
    }

    updateStateForm = (e) => {
        
       this.setState({ [e.target.id] : e.target.value });
       console.log(this.state.name)
    }

    render(){
        return(
            <div className="form-container">
                <form action="" className="AddNewContact">
                    <input 
                        id='name'
                        type="text" 
                        name="name" 
                        placeholder="your name" 
                        value={this.state.name}
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