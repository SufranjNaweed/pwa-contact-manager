import React , { Component } from 'react';
import PropTypes from 'prop-types';

class ContactItem extends Component {
    
    constructor(props){
        super(props);
        this.state ={ contact : this.props.contact };
    }
    
    render(){
        const contact = this.state.contact;

        return (
            <div className="contact-item" >
                <div className="img-container">
                    <img src={contact.thumbnailUrl} alt="avatar"/>
                </div>
                <div className="content" onClick={this.props.clickItem.bind(this, contact.id)}>
                    <p className="text-center">{contact.name}</p>
                    <p className="">{contact.username}</p>
                    <a href={contact.email}>{contact.email}</a>
                    <a href={contact.website}>{contact.website}</a>
                    <a href={contact.phone}>{contact.phone}</a> 
                </div>
                <div className="deleteButton" onClick={this.props.deleteContact.bind(this, contact.id)}>
                <svg width="30px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-times" role="img" viewBox="0 0 640 512"><path d="M589.6 240l45.6-45.6c6.3-6.3 6.3-16.5 0-22.8l-22.8-22.8c-6.3-6.3-16.5-6.3-22.8 0L544 194.4l-45.6-45.6c-6.3-6.3-16.5-6.3-22.8 0l-22.8 22.8c-6.3 6.3-6.3 16.5 0 22.8l45.6 45.6-45.6 45.6c-6.3 6.3-6.3 16.5 0 22.8l22.8 22.8c6.3 6.3 16.5 6.3 22.8 0l45.6-45.6 45.6 45.6c6.3 6.3 16.5 6.3 22.8 0l22.8-22.8c6.3-6.3 6.3-16.5 0-22.8L589.6 240zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                </div>
            </div>
        )
    }
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
}

export default ContactItem;