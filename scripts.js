let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    let valueTask = form.elements.zad1.value, 
        taskItem = document.createElement('div');
   
    taskItem.innerHTML = valueTask;
    taskItem.classList.add('taskList');

    list.appendChild(taskItem);
    let taskList = document.querySelectorAll('.taskList');
       
    for (let index = 0; index < taskList.length; index++) {
        let taskListItem = taskList[index];
        console.log(taskListItem);
        taskListItem.addEventListener("click", function (event) {
            
            event.target.style.textDecoration = 'line-through';
            event.preventDefault();
        });
    }
    
    form.addEventListener("reset", function(event) {
        event.preventDefault();

        let cleanTask = document.querySelectorAll('.taskList');
        cleanTask[0].remove();
       
    });
    
});




