// task 4
const taskName = document.getElementById("taskName");
const taskDes = document.getElementById("taskDes");
const assignTo=document.getElementById('assignTo')
const dueDate = document.getElementById("dueDate");
const dueDateIn = new Date(dueDate.value);
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


//Task 6
// Create a TaskManager class
class TaskManger {
    static lastID=0
    constructor(name,description,assignTo, dueDate,status,comment){
        this._id=++TaskManger.lastID
        this._name=name
        this._description=description
        this._assigTo=assignTo
        this._dueDate=dueDate
        this._status=status
        this._comment=comment
    }
    get id(){
        return this._id
    }
    get name(){
        return this._name
    }
    get description(){
        return this._description
    }
    get assignTo(){
        return this._assigTo
    }
    get dueDate(){
        return this._dueDate
    }
    get status(){
        return this._status
    }
    get comment(){
        return this._comment
    }
set name(newName){
   this._name=newName
}
set description(newDescription){
    this._description=newDescription
}
set assignTo(newAssignTo){
    this._assigTo=newAssignTo
}
set dueDate(newDueDate){
    this._dueDate=newDueDate
}
set status(newStatus){
    this._status=newStatus
}
set comment(newComment){
    this._comment=newComment
}
}
class TaskManagers{
    // Each task object should be added to and stored in an array variable
    constructor(){
        this.taskMangers=[];
    }
// Add Task -> a task to existing Tasks List
addTask(taskName,taskDes,assignTo,dueDate,taskSt,commentIn){
    let task=new TaskManger(taskName,taskDes,assignTo,dueDate,taskSt,commentIn);
this.taskMangers.push(task);
return task;
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
//Add a card once created with all the details of task.
btnSubmit.addEventListener('click',(e)=>{
//Form fields data validation
   if(validate()){
    //call render method to add new tasks
     render();
   }
e.preventDefault();
    })

//Each time a new task is added, the render() method is called todisplay the new task.
const render=()=>{
     //  add task info into TaskManagers array list 
     let task= new TaskManagers();
     task.addTask(taskName.value,taskDes.value,assignTo.value,dueDate.value,taskSt.value,commentIn.value)
    //show task box in HTML
    createTaskHTML(task.getAllTasks());
     //    reset form fields
     document.getElementById("myForm").reset();
}
// creates a Card Layout HTML as defined on previous tasks object
const createTaskHTML=(task)=>{
task.forEach(element => {
   const taskHTML=` <div class="col ">
        <div class="card mb-3 bg-info m-2 task-box p-1 rounded shadow box-1 text-light" style="max-width: 18rem;">
          <div class="card-header bg-transparent border-light"><small class="fst-italic" >Due Date:
          ${element.dueDate}</small></div>
          <div class="card-body text-light">
            <h5>Name: ${element.name}</h5>
            <p>Description: ${element.description}</p>
            <p>Assign To:    <select class="form-control col me-3" id="assignTo" required="required">
            <option>${element.assignTo}</option>
           
        </select></p>
            <p>Comment: ${element.comment}</p>
            <div class="spinner-border text-light" role="status"> </div>
                <span >${element.status}</span>
              
          <div class="card-footer bg-transparent border-light">              
              <button type="submit" class="btn btn-success shadow">Update</button>
              <button type="submit" class="btn btn-danger shadow">Delete</button>
          </div>
        </div>
      </div>`
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += taskHTML; 
});     
}


