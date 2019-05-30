"use strict";

($(function () {
  const URL_SEARCH_GIT_HUB_USERS = 'https://api.github.com/search/users?q=';
  const URL_GIT_HUB_USERS = 'https://api.github.com/users/';

  let userTemplateGitHub = $('#userTemplateGitHub').html();
  let $dataUserGitHub = $('.dataUserGitHub');


  function showUserGitHub(user) {
    $dataUserGitHub.html(userTemplateGitHub.replace('{{avatar}}', user.avatar_url)
      .replace('{{name}}', user.name)
      .replace('{{url}}', user.html_url)
      .replace('{{login}}', user.login)
      .replace('{{repositories}}', user.public_repos)
      .replace('{{followers}}', user.followers)
      .replace('{{date_of_registration}}', createDate(user.created_at)));
  }


  function createDate(data) {
    let date = new Date(data);
    return `${date.getDate()} : ${date.getMonth()} : ${date.getFullYear()} `
  }

  
  function createUsers(user) {
    return user.items.map((item) => item.login);
  }


  $("#searchUsers").autocomplete({
    source: function (request, response) {
      jQuery.get(URL_SEARCH_GIT_HUB_USERS + request.term).done(data => response(createUsers(data)));
    },
    minLength: 2,
    select: function (event, ui) {
      jQuery.get(URL_GIT_HUB_USERS + ui.item.label).done(data => showUserGitHub(data));
    }
  });
}));