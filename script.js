
// task 4
const taskName = document.getElementById("taskName");
const taskDes = document.getElementById("taskDes");
const assignTo=document.getElementById('assignTo')
const dueDate = document.getElementById("dueDate");

const taskSt=document.getElementById('taskSt')
const commentIn=document.getElementById('comment')
const btnSubmit = document.getElementById("submitBut");

const validate=()=> {
    // return a value if it is true it is ready for submit
    let valid = true;
//validate  task name
    if (taskName.value.length < 8) {
        const nameError = document.getElementById("nameError");
        nameError.classList.add("visible");
        taskName.classList.add("invalid");
        return valid = false;
    } else {
        nameError.classList.remove("visible");
        taskName.classList.remove("invalid");
    };
    //validate  description
    if (taskDes.value.length < 15) {
        const nameError1 = document.getElementById("nameError1");
        nameError1.classList.add("visible");
        taskDes.classList.add("invalid");
        return valid = false;
    } else {
        nameError1.classList.remove("visible");
        taskDes.classList.remove("invalid");
    };
    //check due day
    const today = new Date();
    const dueDateIn = new Date(dueDate.value);
    if (!dueDate.value || dueDateIn < today) {
        const nameError2 = document.getElementById("nameError2");
        nameError2.classList.add("visible");
        dueDate.classList.add("invalid");
        return valid = false;
    } else {
        nameError2.classList.remove("visible");
        dueDate.classList.remove("invalid");
    };
    return valid;
};

// Updated Task-5
// Added Current Date/Time
setInterval(displayTime, 1000);
function displayTime() {
  const time = new Date();
  const day = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();
  const currentDate = day + '/' + month + '/' + year;

  let hrs = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let en = 'AM';
  if (hrs > 12) {
    en = 'PM';
    hrs = hrs - 12;
}
    if (hrs == 0) {
  hrs = 12;
}
        if (hrs < 10) {
  hrs = '0' + hrs;
}
    if (min < 10) {
  min = '0' + min;
}
    if (sec < 10) {
  sec = '0' + sec;
}
document.getElementById('cDateTime').innerHTML = `Date/Time: ${currentDate} ${hrs}:${min}:${sec} ${en}`;
};


//task 8 use localstorage
//1.check the localstorage and load the data if there is nothing create array 
const data = localStorage.getItem("alltasks");
const taskList = data ? JSON.parse(data) : [];


//add task into locastorge

class Task {
    constructor(id,name,description,assignTo, dueDate,status,comment){
        this.id=id
        this.name=name
        this.description=description
        this.assigTo=assignTo
        this.dueDate=dueDate
        this.status=status
        this.comment=comment
    }

}

// const task1 = new Task('1','1','1','1','1','1','1')
// const task2 = new Task('2','2','2','2','2','2','2')



//Task 6
// Create a TaskManager class

class TaskManagers{
    // Each task object should be added to and stored in an array variable
    constructor(taskList){
        this.taskMangers=taskList;
    }
// Add Task -> a task to existing Tasks List and save to localstorage
addTask(task){
    this.taskMangers.push(task);
//save taskManager in to local storage  yi 11.29
    localStorage.setItem("alltasks", JSON.stringify(this.taskMangers))
}
// Get Tasks -> returns the list of ALL tasks
getAllTasks(){
    return this.taskMangers
}
// Get all Tasks with a given status -> returns a list of all tasks where a status equal to the status passes as an argument
getTasksWithStatus(status){
    let filterTask=this.taskMangers.filter(task=>task.status===status)
    return filterTask
}
}

const tasks = new TaskManagers(taskList)

// tasks.addTask(task1)
// tasks.addTask(task2)

// console.log(taskList.length)




//Add a card once created with all the details of task.
btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault();
//Form fields data validation
   if(validate()){
    //call add new task 
    console.log(taskList.length);
    let taskId = taskList.length?taskList[taskList.length - 1].id/1 + 1
    : 1;
    const newTask = new Task(taskId,taskName.value,taskDes.value,assignTo.value,dueDate.value,taskSt.value,commentIn.value)
    tasks.addTask(newTask)
    render()
    //reset form
    document.getElementById("myForm").reset()
   }

    })

// //Each time a new task is added, the render() method is called todisplay the new task.
const itemsContainer = document.getElementById("list-items")

const render=()=>{  
    const tasks = taskList.map((element, index) => {
        return` <div class="col ">
        <div class="card mb-3 bg-info m-2 task-box p-1 rounded shadow box-1 text-light" style="max-width: 18rem;">
          <div class="card-header bg-transparent border-light"><small class="fst-italic" >Due Date:
          ${element.dueDate}</small></div>
          <div class="card-body text-light">
            <h5>Name: ${element.name}</h5>
            <p>Description: ${element.description}</p>
            <p>Assign To: <span >${element.description}</span></p>
            <p>Comment: ${element.comment}</p>
            <div class="spinner-border text-light" role="status"> </div>
                <span >${element.status}</span>
              
          <div class="card-footer bg-transparent border-light">              
              <button type="submit" class="btn btn-success shadow">Update</button>
              <button type="submit" class="btn btn-danger shadow"><a href="javascript:" class="text-decoration-none text-white" data-id=${index}>delete</a></button>
          </div>
        </div>
      </div>`
})
    itemsContainer.innerHTML = tasks.join("")
}

// render()
// creates a Card Layout HTML as defined on previous tasks object
// const createTaskHTML=(tasks)=>{
// tasks.forEach((element, index) => {
//    const taskHTML=` <div class="col ">
//         <div class="card mb-3 bg-info m-2 task-box p-1 rounded shadow box-1 text-light" style="max-width: 18rem;">
//           <div class="card-header bg-transparent border-light"><small class="fst-italic" >Due Date:
//           ${element.dueDate}</small></div>
//           <div class="card-body text-light">
//             <h5>Name: ${element.name}</h5>
//             <p>Description: ${element.description}</p>
//             <p>Assign To:    <select class="form-control col me-3" id="assignTo" required="required">
//             <option>${element.assignTo}</option>
           
//         </select></p>
//             <p>Comment: ${element.comment}</p>
//             <div class="spinner-border text-light" role="status"> </div>
//                 <span >${element.status}</span>
              
//           <div class="card-footer bg-transparent border-light">              
//               <button type="submit" class="btn btn-success shadow">Update</button>
//               <button type="submit" class="btn btn-danger shadow"><a href="javascript:" class="text-decoration-none text-white" data-id=${index}>delete</a></button>
//           </div>
//         </div>
//       </div>`
//     const itemsContainer = document.getElementById("list-items");
//     itemsContainer.innerHTML += taskHTML; 
// });     
// }

//active render function which will display cards once open page
render()

//delete task
function deleteTask(){
    const itemsContainer = document.getElementById("list-items")
    itemsContainer.addEventListener('click', function(e){
        if(e.target.tagName ==='A'){
        const del = e.target.dataset.id;
        taskList.splice(del, 1);
        }
        localStorage.setItem("alltasks", JSON.stringify(taskList));
        render()
       console.log('111');
    }
    )
}


//active delete function
deleteTask()




