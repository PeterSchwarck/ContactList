import Flux from "@4geeksacademy/react-flux-dash";
import MyStore from '../stores/MyStore';

export let addContact = (contact) => {
    let contacts = MyStore.getState('contacts');
    if(!contacts) contacts = [contact];
    else contacts.push(contact);
    Flux.dispatchEvent("contacts", contacts);
};

export const deleteContact = (contact) => {
    let contacts = MyStore.getState('contacts');
    const newListOfContacts = contacts.filter((c)=> (c.id != contact.id));
    Flux.dispatchEvent("contacts", newListOfContacts);
};

export const editContact = (contact) => {
    let contacts = MyStore.getState('contacts');
    const newListOfContacts = contacts.map((c)=> {
        if(c.id == contact.id) return contact;
    });
    Flux.dispatchEvent("contacts", newListOfContacts);
};

window.addContact = addContact;
window.deleteContact = deleteContact;
