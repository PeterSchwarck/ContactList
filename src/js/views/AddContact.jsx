import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import * as actions from '../actions/MyActions';
import MyStore from '../stores/MyStore';

export default class Contacts extends Flux.DashView {
    constructor(){
        super();
        this.state = {
            full__name: '',
            email: '',
            phone: '',
            address: '',
            mode: 'add'
        };
    }
    
    componentDidMount(){
        if(typeof this.props.match.params.id !== 'undefined'){
            const contacts = MyStore.getState('contacts');
            const contact = contacts.find((c) => c.id == this.props.match.params.id);
            this.setState({ mode: 'edit', full__name: contact.full__name, id: contact.id });
        }
        this.subscribe(MyStore, "contacts", (contacts) => {
            this.props.history.push('/');
        });
    }
    
    render() {
        return (
            <div className="container">
                <div>
                    <h1 className="text-center mt-5">Add a new contact</h1>
                    <form>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Full Name" 
                            onChange={(e) => this.setState({
                                full__name: e.target.value
                            })}
                            value={this.state.full__name}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Enter email" 
                            onChange={(e) => this.setState({
                                email: e.target.value
                            })}
                            value={this.state.email}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="phone" className="form-control" placeholder="Enter phone" />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" placeholder="Enter address" />
                        </div>
                        <button 
                            type="button" 
                            className="btn btn-primary form-control"
                            onClick={() => {
                                if(this.state.mode == 'add') actions.addContact(
                                { full__name: this.state.full__name}, 
                                { email: this.state.email});
                                if(this.state.mode == 'edit') actions.editContact(
                                { full__name: this.state.full__name, 
                                id: this.state.id});
                                
                                }
                            }
                        >save</button>
                        <Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
                    </form>
                </div>
            </div>
        );
    }
}