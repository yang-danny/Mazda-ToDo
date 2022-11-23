
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
const task= new TaskManger()
//Add and stored task object in an array
 const taskArray=[]

//  Add  a task to existing Tasks List
const  addTask=(task)=>{
    taskArray.push(task)
}
// function to return the list of ALL tasks
const getAllTasks=()=>{
for(let i=0;i<taskArray.length;i++){
    console.log(taskArray[i])
}
}
// Get all Tasks with a given status
const getTasksWithStatus=(status)=>{
   let outTask=taskArray.filter(task=>task.status===status)
   console.log(outTask)
}
console.log(taskArray)
//getTasksWithStatus('To Do')
addTask(new TaskManger('Leo','new task','Leo','01/12/2022','Done','on time'))
addTask(new TaskManger('Eason','new task','eason','01/12/2022','To Do','on time'))
addTask(new TaskManger('danny','new task','danny','01/12/2022','Review','on time'))
addTask(new TaskManger('Leo','new task','leo','01/12/2022','Done','on time'))
addTask(new TaskManger('Eason','new task','eason','01/12/2022','In Progress','on time'))
addTask(new TaskManger('danny','new task','danny','01/12/2022','Done','on time'))
getAllTasks()

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
displayTask(taskArray)

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



// task 4
const submit = document.getElementById("submitBut");

submit.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();

    // return a value if it is true it is ready for submit
    let valid = true;
    //validate task name 

    const firstNameField = document.getElementById("taskName");
    const nameValue = firstNameField.value;
    //alert(nameValue.length);



    if (nameValue.length < 8) {
        const nameError = document.getElementById("nameError");
        nameError.classList.add("visible");
        firstNameField.classList.add("invalid");
        return valid = false;
    } else {
        nameError.classList.remove("visible");
        firstNameField.classList.remove("invalid");

    };

    //validate  description
    const taskInfo = document.getElementById("taskDes");
    const taskValue = taskInfo.value;
    // alert(taskValue.length);



    if (taskValue.length < 15) {
        const nameError1 = document.getElementById("nameError1");
        nameError1.classList.add("visible");
        taskInfo.classList.add("invalid");
        return valid = false;
    } else {
        nameError1.classList.remove("visible");
        taskInfo.classList.remove("invalid");

    };

    //check due day
    const dueDate = document.getElementById("dueDate");
    const dueDateIn = new Date(dueDate.value);
    const today = new Date();
    // alert(dueDateIn);

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


