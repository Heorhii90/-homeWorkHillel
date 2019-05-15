'use strict';

const URL = 'http://fep-app.herokuapp.com/api/contacts';
const contactForm = document.getElementById('contactForm');
const contactsList = document.getElementById('contactsList');
const contactNameInput = document.getElementById('nameInput');
const contactSurnameInput = document.getElementById('surnameInput');
const contactPhoneInput = document.getElementById('phoneInput');
const contactEmailInput = document.getElementById('emailInput');
const contactTemplate = document.getElementById('contactTemplate').innerHTML;
const editContactTemplate = document.getElementById('editContactTemplate').innerHTML;

let contacts = [];

init()

function init() {
    contactForm.addEventListener('submit', contactSubmit);
    contactsList.addEventListener('click', onContactsListClick);

    fetchContacts();
}

function fetchContacts() {
    return fetch(URL)
        .then((resp) => resp.json())
        .then(setContacts)
        .then(renderContacts);
}

function setContacts(data) {
    return contacts = data
}

function renderContacts(data) {
    contactsList.innerHTML = data.map((el) => {
        return contactTemplate
            .replace('{{id}}', el.id)
            .replace('{{name}}', el.name)
            .replace('{{surname}}', el.surname)
            .replace('{{phone}}', el.phone)
            .replace('{{email}}', el.email)
            .replace('{{class}}', el.is_active ? 'active' : '')
    }).join('\n');
}

function contactSubmit(e) {
    e.preventDefault();

    submitContact();
}

function onContactsListClick(event) {
    if (event.target.classList.contains('btnEdit')) {
        editContact(event.target.parentNode.parentNode)
    } else if (event.target.classList.contains('btnDel')) {
        removeContact(event.target.parentNode.parentNode.dataset.contactId)
            .then(fetchContacts);
    } else if (event.target.classList.contains('btnCancel')) {
        fetchContacts();
    } else if (event.target.classList.contains('btnSave')) {
        saveContact(event.target.parentNode.parentNode);
    } else if (event.target.tagname = 'TD') {
        togglePopupState(event.target.parentNode);
    } else {
        toggleContactState(event.target.parentNode.dataset.contactId)
            .then(fetchContacts);
    }
}

function togglePopupState(el) {
    el.classList.toggle('popup')
}

function editContact(el) {
    let id = el.dataset.contactId;

    let contact = contacts.find((cont) => cont.id == id);
    el.innerHTML = editContactTemplate
        .replace('{{id}}', contact.id)
        .replace('{{name}}', contact.name)
        .replace('{{surname}}', contact.surname)
        .replace('{{phone}}', contact.phone)
        .replace('{{state}}', contact.is_active)
}

function saveContact(el) {
    let id = el.dataset.contactId;

    let contact = contacts.find((cont) => cont.id == id);

    contact.name = el.id.value;
    contact.surname = el.id.value;
    contact.phone = el.id.value;

    rewriteContact(contact);
    fetchContacts();
}

function removeContact(id) {
    return fetch(URL + '/' + id, { method: 'DELETE' });
}

function toggleContactState(id) {
    const contact = contacts.find((cont) => cont.id == id);

    contact.is_active = !contact.is_active;
    return rewriteContact(contact);
}

function rewriteContact(contact) {
    return fetch(URL + '/' + contact.id, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    }).then(fetchContacts);
}

function submitContact() {
    const contact = {
        name: contactNameInput.value,
        surname: contactSurnameInput.value,
        phone: contactPhoneInput.value,
        is_active: true
    }
    addContact(contact)
        .then(fetchContacts);

    resetContactForm();
}

function addContact(contact) {
    return fetch(URL, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    });
}

function resetContactForm() {
    contactNameInput.value = '';
    contactSurnameInput.value = '';
    contactPhoneInput.value = '';
}