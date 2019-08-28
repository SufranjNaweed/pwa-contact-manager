import React , { Component } from 'react';

class ContactItem extends Component {
    render(){
        const contact = this.props.contact;

        return (
            <div className="contact-item">
                <div className="img-container">
                    <img src={contact.thumbnailUrl} alt="avatar"/>
                </div>
                <div className="content">
                        {/* button call */} 
                        <p className="text-center">{contact.name}</p>
                        <p className="">{contact.username}</p>
                        <a href={contact.email} mailto>{contact.email}</a>
                        <a href={contact.website}>{contact.website}</a>
                        <a href={contact.phone}>{contact.phone}</a> 
                </div>
                <div className="deleteButton">
                    X
                </div>
            </div>
        )
    }
}

export default ContactItem;