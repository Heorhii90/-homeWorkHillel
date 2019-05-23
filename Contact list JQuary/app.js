'use strict';

$(function () {
    const URL = 'http://fep-app.herokuapp.com/api/contacts';

    const contactTemplate = $('#contactTemplate').html();
    let form,
        dialog = $("#dialog"),
        name = $("#name"),
        email = $("#email"),
        phone = $("#phone"),
        contactList = ("#contactList"),
        allFields = $([]).add(name).add(email).add(phone);

    $(function () {
        $("#dialog").dialog({
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });

        $("#opener").on("click", function () {
            $("#dialog").dialog("open");
        });
    });

    $(function fetchContacts() {
        const contact = {
            id: '',
            name: name.val(),
            email: email.val(),
            phone: phone.val(),
        }
        $.ajax({
            url: URL,
            type: "GET",
            data: JSON.stringify(contact),
            contentType: "application/json",
            dataType: "json",
            success: getContacts
        })
    });

    function onCreateButtonClick() {
        if (idEditedItem) {
            let contact = {
                id: idEditedItem,
                name: name.val(),
                email: email.val(),
                phone: phone.val(),
            }
            $.ajax({
                url: URL + '/' + idEditedItem,
                type: "PUT",
                data: JSON.stringify(contact),
                contentType: "application/json",
                dataType: "json",
                success: getContacts
            })

        } else {
            const contact = {
                id: '',
                name: name.val(),
                email: email.val(),
                phone: phone.val(),
            }

            $.ajax({
                url: URL,
                type: "POST",
                data: JSON.stringify(contact),
                contentType: "application/json",
                dataType: "json",
                success: getContacts
            })
        }
    }

    function getContacts() {
        jQuery.get(URL).done(response => fetchContacts(response));
    }

    function fetchContacts(contacts) {
        contactList.html(contacts.map(item => {
                return contactTemplate.replace('{{id}}', item.id) 
                    .replace('{{name}}', item.name)
                    .replace('{{email}}', item.email)
                    .replace('{{phone}}', item.phone)
            }).join('\n'));

        dialog.dialog("close");
        $("button[data-delete-button]").click(onDeleteButtonClick);
        $("button[data-edit-button]").click(onEditButtonClick);
    }

    function onDeleteButtonClick(event) {
        deleteContactInServer(getId(event.target));
    }

    function deleteContactInServer(id) {
        return $.ajax({
            url: URL + '/' + id,
            type: "DELETE",
            success: getContacts
        });
    }

    function onEditButtonClick(event) {
        dialog.dialog("open");

        idEditedItem = getId(event.target);

        jQuery.get(URL + '/' + getId(event.target)).done(response => renderCurrentContact(response));
    }

    function renderCurrentContact(contact) {
        name.val(contact.name);
        email.val(contact.email);
        phone.val(contact.phone);
    }

    function getId(element) {
        let id = $(element).parents('tr').data('contact-id');
        return id;
    }

    resetContactForm();
    dialog = dialog.dialog({
        autoOpen: false,
        height: 300,
        width: 300,
        modal: true,
        show: {
            effect: "bounce",
            duration: 500
        },
        hide: {
            effect: "explode",
            duration: 500
        },
        buttons: {
            "Create": onCreateButtonClick,
            "Reset": function () {
                form[0].reset();
            }
        },
        close: function () {
            form[0].reset();
            allFields.removeClass("ui-state-error");
        }
    });

    form = dialog.find("form").on("submit", function (event) {
        event.preventDefault();
        onCreateButtonClick(event);
    });

    function resetContactForm() {
        name.val('');                                                                                                                              
        email.val('');
        phone.val('');
    }

});