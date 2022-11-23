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