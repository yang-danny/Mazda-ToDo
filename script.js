
// task 4

const taskName = document.getElementById("taskName");
const taskDes = document.getElementById("taskDes");
const assignTo=document.getElementById('assignTo')
const dueDate = document.getElementById("dueDate");
const dueDateIn = new Date(dueDate.value);
const taskSt=document.getElementById('taskSt')
const commentIn=document.getElementById('comment')
const btnSubmit = document.getElementById("submitBut");
let taskArray= new Array

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

// task 5  display day month year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();
const dayBox = document.getElementById('dayBox');
const monthBox = document.getElementById('monthBox');
const yearBox = document.getElementById('yearBox');

dayBox.innerHTML = currentDay;
monthBox.innerHTML = currentMonth + 1;
yearBox.innerHTML = currentYear;


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
//Creat a task as an instance of TaskManager class object
// const task= new TaskManger()
//Add and stored task object in an array


//  Add  a task to existing Tasks List
// const  addTask=(task)=>{
//     taskArray.push(task)
//     getAllTasks()
//     displayTask(taskArray)
// }
// function to return the list of ALL tasks
// const getAllTasks=()=>{
// for(let i=0;i<taskArray.length;i++){
//     console.log(taskArray[i])
// }
// }
// Get all Tasks with a given status
const getTasksWithStatus=(status)=>{
   let outTask=taskArray.filter(task=>task.status===status)
   console.log(outTask)
}

//getTasksWithStatus('To Do')

btnSubmit.addEventListener('click',(e)=>{
   document.getElementById("list-items").innerHTML='';
    
   if(validate()){
      //  add task info into TaskManager array list
     taskArray.push(new TaskManger(taskName.value,taskDes.value,assignTo.value,dueDate.value,taskSt.value,commentIn.value))
     //show task box in HTML
      displayTask(taskArray)
      console.log(taskArray)
      //    reset form fields
      document.getElementById("myForm").reset();
   }

e.preventDefault()
    })

// creates a Card Layout HTML as defined on previous tasks object
const displayTask=(task)=>{
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
              <button type="submit" class="btn btn-danger shadow">Remove</button>
          </div>
        </div>
      </div>`
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += taskHTML; 
});     
}


