const CONTACTS_URL = 'http://fep-app.herokuapp.com/api/contacts';

const addContactBtn = document.getElementById('addContactBtn');
const contactsList = document.getElementById('contactsList');
const contactNameInput = document.getElementById('nameInput');
const contactSurnameInput = document.getElementById('surnameInput');
const contactPhoneInput = document.getElementById('phoneInput');
const contactTemplate = document.getElementById('contactTemplate').innerHTML;
const deleteContactBtn = document.getElementById('btnDelete');

let contacts = [];

init();

function init() {
    addContactBtn.addEventListener('click', onAddContactBtnClick);
    contactsList.addEventListener('click', onContactsListClick);
    contactsList.addEventListener('click', onDeleteContactsListClick);

    fetchContacts();
}

function fetchContacts() {
    return fetch(CONTACTS_URL)
        .then((resp) => resp.json())
        .then(setTasks)
        .then(renderContacts)
}

function setTasks(data) {
    contacts = data;
    return data;

}

function renderContacts(data) {
    console.log(data)
    contactsList.innerHTML = data.map((el) => {
        return contactTemplate
            .replace('{{name}}', el.name)
            .replace('{{surname}}', el.surname)
            .replace('{{phone}}', el.phone)
            .replace('{{id}}', el.id)
            .replace('{{class}}', el.isDone ? 'done' : '')
    }).join('\n');

}

function onAddContactBtnClick(event) {
    event.preventDefault();

    submitContact();
}

function submitContact() {
    const contacts = {
        name: contactNameInput.value, isDone: false,
        phone: contactPhoneInput.value, isDone: false,
        surname: contactSurnameInput.value, isDone: false
    };

    addContact(contacts).then(fetchContacts);
}

function addContact(contacts) {
    return fetch(CONTACTS_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contacts)
    });
}

function onDeleteContactsListClick(event) {
    if (event.target.tagName === 'BUTTON') {
        deleteContact(event.target.parentNode.parentNode)
            .then(fetchContacts);
    }
}

function onContactsListClick(event) {
    if (event.target.parentNode.classList.contains('contacts')) {
        toggleTaskState(event.target.parentNode)
            .then(fetchContacts);
    }
}

function toggleTaskState(el) {
    const id = el.dataset.contactId;
    const contact = contacts.find((el) => { return el.id == id });

    if (contact.isDone = !contact.isDone) {
        
    }

    return fetch(CONTACTS_URL + '/' + contact.id, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
}

function deleteContact(el) {
    const id = el.dataset.contactId;
    const contact = contacts.find((el) => { return el.id == id });

    return fetch(CONTACTS_URL + '/' + contact.id, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
}
