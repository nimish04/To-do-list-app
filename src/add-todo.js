import {DisplayTodoList} from './list-todos.js'

export function addNewTodo(e){
  e.preventDefault();

  var input=e.target.newtask.value;

  e.target.newtask.value="";


  $.post('/addtask',
  {newtask:input},

    function(response,status){

      DisplayTodoList(response);

});
}
