import $ from 'jquery';

export default class TodoFormView {
    constructor() {
        this.displayList();
        this.addFormForTodo();
        this.$el = $('#todoForm');

        this.render = this.render.bind(this);

        this.onLineClick = this.onLineClick.bind(this);
        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);

        this.$el.on('click', 'button[delete-button]', this.onDeleteButtonClick);
        this.$el.on('click', 'tr', this.onLineClick);

        this.onAddButtonClick = this.onAddButtonClick.bind(this);
        $('#addButton').click(this.onAddButtonClick);
    }

    displayList() {
        let table = $(
            `<table class="u-full-width">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
            </thead>
        
            <tbody id="todoForm"></tbody>
        </table>`
        );

        $(document.body).append(table);
    }

    addFormForTodo() {
        let $tfoot = $(
            `<tfoot>
                <tr>
                    <td colspan="5" class="table-input">
                        <input type="text" id='title'>
                    </td>
                </tr>
                <tr>
                    <td colspan="5" class="table-add-button">
                        <button id="addButton">Add Todo</button>
                    </td>
                </tr>
            </tfoot>`
        );

        $('.u-full-width').append($tfoot);
    }
    onAddButtonClick() {
        const todo = {
            title: $('#title').val(),
            isDone: false
        }

        this.onClickButtonAdd(todo);
    }

    onLineClick(event) {
        let id = $(event.target).closest('tr').data('id');
        this.onClickOnLine(id);
    }

    onDeleteButtonClick(event) {
        let id = $(event.target).closest('tr').data('id');
        this.onClickOnButton(id);
    }

    render(data) {
        this.$el.html(`${data.map(this.renderItem).reverse().join('\n')}`)
    }

    renderItem(el) {
        let todo = (el.isDone) ? "fild-todo" : "notFilled-todo";

        return `<tr data-id="${el.id}" class=${todo}>
                <td>${el.id}</td>
                <td>${el.title}</td>
                <td><button delete-button>Delete</button></td>
                </tr>`
    }

    resetTodoList() {
        $('#title').val('');
    }
}