import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';
import MyStore from '../stores/MyStore';
import * as MyActions from '../actions/MyActions';

export default class Contacts extends Flux.DashView {
    constructor(){
        super();
        this.state = {
            contacts: []
        };
    }
    componentDidMount(){
        let contacts = MyStore.getState('contacts');
        if(contacts) this.setState({ contacts });
        this.subscribe(MyStore, "contacts", (contacts) => {
            this.setState({ contacts });
        });
    }
    render() {
        const cards = this.state.contacts.map((c, i) => {
            return <ContactCard 
                key={i} 
                data={c}
                email={c.email}
                onDelete={(contacts) => MyActions.deleteContact(contacts)} 
            />;
        });
        return (
            <div className="container">
                <div>
                    <p className="text-right my-3">
                        <Link className="btn btn-success" to="/add">Add new contact</Link>
                    </p>
                    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                        <ul className="list-group pull-down" id="contact-list">
                            {cards}
                        </ul>
                    </div>
                </div>
                <Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} />
            </div>
        );
    }
}