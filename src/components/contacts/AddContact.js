import React, { Component } from 'react';
import { Consumer } from '../../Context'
import InputGrop from '../layouts/InputGrop'
import axios from 'axios'

class AddContact extends Component{ 
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
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
        const newConatct = {
            name,
            email,
            phone
        }

        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newConatct);
        dispatch({type: 'ADD_CONTACT', payload: res.data});

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
                                    Add Contact
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
                                        <button onClick={this.add} className="btn btn-block btn-primary">Add Contact</button>            
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
export default AddContact;