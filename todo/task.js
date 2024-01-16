const taskInput = document.getElementById("task__input");
const tasksAddBtn = document.getElementById("tasks__add");
const taskList = document.getElementById('tasks__list');

//ФУНКЦИЯ создания новой задачи и очистки поля ввода 
function addNewTask() {
        if(taskInput.value.trim()){  // trim()-убирает пробелы в начале и конце строки, чтобы не было пустых задач
                taskList.insertAdjacentHTML("beforeEnd",
                        `<div class="task">
                              <div class="task__title">
                                    ${taskInput.value}
                              </div>
                              <a href="#" class="task__remove">&times;</a>
                      </div>`)
        }
        //taskInput.value = ""; // простой вариант для очистки поля формы 

        // более сложный вариант для очистки формы (чтобы не забывать ;) )
        const form = document.getElementById("tasks__form");
        form.reset();    
}

//обработчики при нажатии на кнопку "Добавить" (варианты)
/*
tasksAddBtn.addEventListener("click", (el)=> {
        el.preventDefault();
        addNewTask();
})
*/
tasksAddBtn.onclick = (el)=> {
        el.preventDefault();
        addNewTask();
}

//обработчик при нажатии на кнопку "Enter" после заполнения поля ввода
tasksAddBtn.addEventListener("keyup", (el)=> {
        el.preventDefault();
        if(el.key === "Enter"){
                addNewTask();
        }        
})

//удаление задачи (при нажатии на красный крестик)
taskList.addEventListener("click", (event) => {
       // event.preventDefault();
        let target = event.target; // определяем место, где поизошло событие ("click")
        if(target.classList.contains("task__remove")){
                //ищем ближайшего предка, который соответствует CSS-селектору "task" и удаляем весь контейнер
                target.closest(".task").remove(); 
               
                /*  //ищем и удаляем элемент-родитель (весь контейнер)
                target.parentElement.remove();
               */ 
        }
} )
