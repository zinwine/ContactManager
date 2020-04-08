import React, { Component } from 'react';
import { Consumer } from '../../Context'
import InputGrop from '../layouts/InputGrop'
import axios from 'axios'

class EditContact extends Component{ 
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount(){
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;
        this.setState({ 
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    }    
    
    // nameRef = React.createRef();    
    // emailRef = React.createRef();
    // phoneRef = React.createRef();
    onSubmit = async (dispatch, e) => { 
        e.preventDefault()
        const { name, email, phone } = this.state
        if(name === ''){
            this.setState({errors: {name: "Name is Required"}});
            return;
        }
        if(email === ''){
            this.setState({errors: {email: "Email is Required"}});
            return;
        }
        if(phone === ''){
            this.setState({errors: {phone: "Phone is Required"}});
            return;
        }
        const EditConatct = {
            name,
            email,
            phone
        }

        const { id } = this.props.match.params;
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, EditConatct);
        dispatch({type: 'EDIT_CONTACT', payload: res.data});

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })
        this.props.history.push('/');
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value })
        // let name = this.nameRef.current.value;
        // let email = this.emailRef.current.value;
        // let phone = this.phoneRef.current.value;
        // this.props.add(name, email, phone);    
        
    // }

    render() {
        const { name, email, phone, errors } = this.state

        return(
            <Consumer>
                {value => {
                    const { dispatch } = value
                     return (    
                        <div className="container">
                            <div className="card mb-3">   
                                <div className="card-header">
                                    Edit Contact
                                </div>  
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <div className="card-body">
                                            <InputGrop
                                            label="Name"
                                            name="name"
                                            placeholder="Enter Name"
                                            type="text"
                                            value={name}
                                            onChange={this.onChange}
                                            error={errors.name}
                                            />
                                            <InputGrop
                                            label="Email"
                                            name="email"
                                            placeholder="Enter Email"
                                            type="email"
                                            value={email}
                                            onChange={this.onChange}
                                            error={errors.email}
                                            />
                                            <InputGrop
                                            label="Phone"
                                            name="phone"
                                            placeholder="Enter Phone"
                                            type="phone"
                                            value={phone}
                                            onChange={this.onChange}
                                            error={errors.phone}
                                            />
                                    </div>           
                                    <div className="card-footer">
                                        <button className="btn btn-block btn-primary">Update Contact</button>            
                                    </div>
                                </form>
                            </div>        
                        </div>        
                    ) 
                }}
            </Consumer>
        )

          
    }
}
export default EditContact;