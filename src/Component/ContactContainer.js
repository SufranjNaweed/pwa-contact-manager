import React, { Component } from 'react';
import uuid from 'uuid';
import gravatar from 'gravatar';

import ContactItem from './ContactItem';
import AddContactForm from './AddContactForm';
import axios from 'axios';



class ContactContainer extends Component {
    
    state  = {
        contacts : []
    }

    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
              this.setState({contacts : res.data});
              const newContactsWithImage = [...this.state.contacts.map(contact => {
                const  avatar = gravatar.url(contact.email, {
                  // s: size, r : rating, d: ??
                  s: "150", r: "g", d : 'mm',
                  // https
                  protocol: 'https'
                });
                contact.url = avatar;
                contact.thumbnailUrl = avatar;
                
                return contact;
              })];
              this.setState({contacts : newContactsWithImage});
            });
    }

    clickItem(id){
      console.log(id);
    }

    deleteContact = (id) => {
      this.setState({ contacts : [...this.state.contacts.filter(contact => contact.id !== id)] })
    }

    addContact = (newContact) => {
      const  avatar = gravatar.url(newContact.email, {
        // s: size, r : rating, d: ??
        s: "150", r: "pg", d : 'mm'
      });

      newContact.id = uuid.v4();
      newContact.url = avatar;
      newContact.thumbnailUrl = avatar;

      this.setState({ contacts : [...this.state.contacts, newContact]})
    }

    render(){
        return(
          <div>
            <AddContactForm
              addContact={this.addContact}
            />
            {
              this.state.contacts.map((contact) => (
                  <ContactItem 
                    contact={contact} 
                    key={contact.id} 
                    clickItem={this.clickItem} 
                    deleteContact={this.deleteContact}
                  />
              ))
            }
          </div>
        )
    }
}

export default ContactContainer;