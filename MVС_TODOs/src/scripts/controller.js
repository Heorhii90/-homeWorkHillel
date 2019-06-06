import TodoListCollection from './model/collection';
import config from './config';
import TodoFormView from './view';

export default class TodoListController{
    constructor(){

        this.collection = new TodoListCollection(config.todosUrl);
        this.view = new TodoFormView();
        
        this.displayTodoList();
        this.displayTodoList = this.displayTodoList.bind(this);
        
        this.view.onClickButtonAdd = (data) => this.collection.addTodoOnServer(data)
            .then(this.displayTodoList).then(this.view.resetTodoList);

        this.view.onClickOnButton = (id) => this.collection.deleteLineOnServer(id)
            .then(this.displayTodoList);

        this.view.onClickOnLine = (id) => 
        this.collection.rewriteLineOnServer(id, this.toggle(id))
            .then(this.displayTodoList);

    }

    displayTodoList() {
        this.collection.fetch().then((data) => {
            this.view.render(data)
        });
    }

    toggle(id) {
        let item = this.collection.getArrayElement(id);
        item.isDone = !item.isDone;
        return item
    }
}