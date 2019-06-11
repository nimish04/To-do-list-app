import {DisplayTodoList} from './list-todos.js'

export function removeTodo(idz){
  
  $.post('/toggletask',
  {check:idz},
    
    function(response,status){

      DisplayTodoList(response);

});
}

export function getIdOfElement(event){
  if(event.target.tagName.toLowerCase()==='li')
    {
      var a=event.target.innerHTML;
    }
  var idz = event.target.dataset.id;
  removeTodo(idz);
}
