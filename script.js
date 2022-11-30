import TaskManager from "./class/TaskManger.js";
import Task from "./class/Task.js";
import validate from "./modules/validate.js"
import displayTime from "./modules/disPlayTime.js";
import render from "./modules/render.js";

const taskName = document.getElementById("taskName");
const taskDes = document.getElementById("taskDes");
const assignTo=document.getElementById('assignTo')
const dueDate = document.getElementById("dueDate");
const taskSt=document.getElementById('taskSt')
const commentIn=document.getElementById('comment')
const btnSubmit = document.getElementById("submitBut");
const itemsContainer = document.getElementById("list-items")
const data = localStorage.getItem("alltasks");
const taskList = data ? JSON.parse(data) : [];
const tasks = new TaskManager(taskList)

//index page load task boxes and display date and time
window.addEventListener('DOMContentLoaded', () => {
    setInterval(displayTime, 1000);
    render(taskList)
    });

//Add a card once created with all the details of task.
btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault();
//Form fields data validation
   if(validate()){
    //call add new task from class
    let taskId = taskList.length?taskList[taskList.length - 1].id/1 + 1
    : 1;
    const newTask = new Task(taskId,taskName.value,taskDes.value,assignTo.value,dueDate.value,taskSt.value,commentIn.value)
    tasks.addTask(newTask)
    //reload task boxes
    render(taskList)
    //reset form
    document.getElementById("myForm").reset()
   }
    })

    //Click Done or Delete button to update task
    itemsContainer.addEventListener('click', function(e){
        //Click Delete button to toggle event
        if(e.target.id ==='del'){
    //function to delete task from task array
        const deleteTask=(value,index,arr)=>{
            //check which task need to be deleted
            if(value.id===parseInt(e.target.dataset.id)){
            //delete task
                arr.splice(index,1)
            }
        }
        //filter task list with delete task
        taskList.filter(deleteTask)
        }
        //Click Done button to toggle event
        if(e.target.id ==="done"){
        //Map each task from taskList array
               for (let task of taskList){
                //toggle task by id
                if(task.id===parseInt(e.target.dataset.id)){  
                //update task status to DONE
                task.status='DONE' 
            }      
    }
    }
    //update local storage with new task list array
    localStorage.setItem("alltasks", JSON.stringify(taskList));
    //reload task boxes
    render(taskList)
})

