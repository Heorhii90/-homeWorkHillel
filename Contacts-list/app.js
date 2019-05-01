'use strict';

const URL = 'https://jsonplaceholder.typicode.com/users';

var request = function () {
  var xhr = new XMLHttpRequest();
  return function (method, url, callback) {
    xhr.onload = function () {
      callback(JSON.parse(xhr.responseText));
    };
    xhr.open(method, url);
    xhr.send();
  };
}();

class Users {

  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    request('GET', URL, (resp) => { this.toRenderContactList(resp) });
    this.el.addEventListener('click', this.onClick);
  }

  toRenderContactList(resp) {
    const userTemplate = document.getElementById('userTemplate').innerHTML;
    let dataUser = '';

    console.log(resp)
    resp.map((item) => {
      dataUser += userTemplate
        .replace('{{name}}', item.name)
        .replace('{{phone}}', item.phone)
        .replace('{{email}}', item.email)

    })
    this.el.children[1].innerHTML = dataUser;
  }
}

const userList = new Users(
  document.getElementById('usersListTable')
);

