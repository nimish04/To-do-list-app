import {addNewTodo} from './add-todo';
import {getIdOfElement} from './remove-todo';
import {DisplayTodoList} from './list-todos.js'

function fetchAllTasks() {

  fetch("alltasks")
  .then((resp) => resp.json()) 
  .then(function(data) {

    DisplayTodoList(data);

    })
  };


function init() {

  fetchAllTasks();

  var myForm = document.getElementById('add-todo-form');
  myForm.addEventListener('submit', addNewTodo);

  var removeTask=document.getElementById("demo");
  removeTask.addEventListener('click', getIdOfElement);

  var addTaskAgain=document.getElementById("completed");
  addTaskAgain.addEventListener('click', getIdOfElement);
}

$(document).ready(init);
