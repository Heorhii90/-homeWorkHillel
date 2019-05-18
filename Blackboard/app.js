'use strict';

(function blackboard() {

    const placeForNotes = $('.notes');
    const addNotes = $('#addNotes');
    const noteTemplate = $('#noteTemplate').html();
    const btnCancel = $('#btnCancel')
    const noteTitle = $('.noteTitle');
    const noteDescription = $('.noteDescription');
    const save = $('#save');
    let notes = [];

    init();

    function showNotes() {
        notes = getNotes();
        renderNotes();
    }

    function getNotes() {
        notes = localStorage.getItem('notes')
        return notes ? JSON.parse(notes) : [];
    }

    function init() {
        addEventHandler();
        showNotes();
    }

    function addEventHandler() {
        addNotes.on('click', function () {
            $('.modalWindow').removeClass('form');
        })
        btnCancel.on('click', function () {
            $('.modalWindow').addClass('form');
        })
        save.on('click', function () {
            createNotes();
        })

    }

    function createNotes() {
        const note = {
            id: Date.now(),
            title: noteTitle.val(),
            description: noteDescription.val()
        }

        sendNotes(note)
    }

    function sendNotes(note) {
        notes.push(note);
        localStorege('notes', notes);
        renderNotes();

    }

    function localStorege(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }

    function renderNotes() {
        const placeData = notes.map((el) => {
            return noteTemplate
                .replace('{{id}}', el.id)
                .replace('{{noteHeader}}', el.title)
                .replace('{{noteBody}}', el.description)
        }).join('\n');

        placeForNotes.html(placeData);
    }
}())
