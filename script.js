document.addEventListener("DOMContentLoaded",()=>{
    const taskInput123=document.getElementById("task");
    const addTaskButton=document.getElementById("addTask");
    const taskList=document.getElementById("addTask");


    // Load tasks from local storage
    const loadTasks=()=>{
        taskList.innerHTML="";
        const tasks=JSON.parse(localStorage.getItem("tasks"))||[];
        
    }

})