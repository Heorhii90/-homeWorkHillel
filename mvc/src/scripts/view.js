import $ from 'jquery';

export default class TodoView {
    constructor(elId) {
        this.$el = $(elId);

        this.onElementClick = this.onElementClick.bind(this);
        this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);
        this.$el.on('click', 'li', this.onElementClick);
        this.eventListener();
    }

    eventListener() {
        this.$el.on('click', '.delete', this.onDeleteBtnClick);
    }

    onDeleteBtnClick(e) {
        const model = $(e.target).parent('tr').data('id')
        this.onDelete(model);
    }

    onElementClick(event) {
        const id = $(event.target).data('id');
        this.onClick(id);
    }

    render(data) {
        this.$el.html(
            `<table>
            ${data.map(this.renderItem).join('\n')}
            </table>`
        )
    }

    renderItem(el) {
        return `<tr data-id="${el.id}"><td>${el.name}</td> <td>${el.surname}</td> <td>${el.email}</td><td><button class="delete">Delete</button></td></tr>`;
    }
}   