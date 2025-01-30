document.addEventListener("DOMContentLoaded",()=>{

    const taskInput=document.getElementById('task')
    const newTaskList=document.getElementById('taskList')
    const taskButton= document.getElementById('addTask')

    // load tasks from local storage when page loads
    function loadTasks(){
        newTaskList.innerHTML="";
        const tasks_localstorage=JSON.parse(localStorage.getItem("tasks"))||[];
        tasks_localstorage.forEach(task=>addTaskToDOM(task));
    }
    // Adding new tasks to website
    // Remove task from local storage and UI
    function removeTask(taskName) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(task => task !== taskName); // Keep only tasks that don't match
        localStorage.setItem("tasks", JSON.stringify(tasks)); // Save updated list

        loadTasks(); // Reloads the list to reflect changes
    }
// Add task to the UI
    function addTaskToDOM(taskText) {
        const li = document.createElement("li");
        li.innerHTML = `${taskText}<button class="delete-btn">Delete</button>`;

        // Append the task to the list
        newTaskList.appendChild(li);

        // Add event listener for deletion
        li.querySelector(".delete-btn").addEventListener("click", function () {
            removeTask(taskText); // Remove task from storage
            li.remove(); // Remove task from the UI immediately
        });
    }
    function addTask() {
        const taskText = taskInput.value.trim();
        if (!taskText) return;

        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(taskText); // Add new task first
        localStorage.setItem("tasks", JSON.stringify(tasks)); // Then save

        addTaskToDOM(taskText);
        taskInput.value = "";
    }
    taskButton.addEventListener("click",addTask);
    taskInput.addEventListener("keypress",(e)=>{
        if (e.key==="Enter"){
            addTask();
        }
    });
    loadTasks(); //load task when page opens
















});