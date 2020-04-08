import React, { Component } from 'react'
import PropType from 'prop-types'
import { Consumer } from '../../Context'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onShow=()=>{this.setState({showContactInfo:!this.state.showContactInfo})}

    onDelete = async (id, dispatch) => {
        try{
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({type: 'DELETE_CONTACT', payload: id});
        }catch(e){
            dispatch({type: 'DELETE_CONTACT', payload: id})};
    }

    render() {
        const {id, name, email, phone } = this.props.contact;
        // const { showContactInfo } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                        <h4>{ name } 
                        <button style={{backgroundColor:"blue",borderRadius:7,color: "white",float: "left", marginRight:15}} onClick={this.onShow} type="button" className="btn-sm">{this.state.showContactInfo ? "Hide" : "Show"}</button>
                        <button onClick={this.onDelete.bind(this, id, dispatch)} type="button" className="btn-sm" style={{backgroundColor: "red", color: "white", float: 'right', borderRadius: 7,padding: "2px 8px"}}><b>&times;</b></button>
                        <Link to={`/contact/edit/${id}`} className="btn-sm" style={{backgroundColor: "black", color: "white", float: 'right', borderRadius: 7,padding: "3px 10px", marginRight: 5}}><b> / </b></Link>
                        </h4>{ 
                            this.state.showContactInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">Email : { email }</li>
                                    <li className="list-group-item">Phone : { phone }</li>
                                </ul>
                            ) : null 
                        }
                    </div>
                    )
                }}
            </Consumer>
           
        )
    }
}

Contact.PropType = {
    contact: PropType.object.isRequired,
}

export default Contact;