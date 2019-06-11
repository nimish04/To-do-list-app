export function DisplayTodoList(response){
  
  var task=[];
    task=response.filter(function(todo){
      return todo.completed !== true;
  
    });
  
    var complete=[];
    complete=response.filter(function(todo){
      return todo.completed === true;
  
    });
  
    var element = document.getElementById("task");

    if(task.length == 0)
      element.classList.add("hide"); 

    if(task.length!=0)
      element.classList.remove("hide");
  
    var element1 = document.getElementById("taskdone");

    if(complete.length == 0)
      element1.classList.add("hide");

    if(complete.length!=0)
      element1.classList.remove("hide");

  var taskToDo="";
  var completedTask="";

  for (var i = 0; i < response.length; i++) {


    if(!response[i].completed)
    taskToDo += "<li data-id=" + i + ">" + response[i].label + "</li>";

    else 
    completedTask += "<li data-id=" + i + ">" + response[i].label + "</li>";
  }

    document.getElementById("demo").innerHTML = taskToDo;
    document.getElementById("completed").innerHTML = completedTask;

}


