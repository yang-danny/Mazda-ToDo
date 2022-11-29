
//Task 6
// Create a TaskManager class
class TaskManager{
    // Each task object should be added to and stored in an array variable
    constructor(taskList){
        this.taskManger=taskList;
    }
// Add Task -> a task to existing Tasks List and save to localstorage
addTask(task){
    this.taskManger.push(task);
//save taskManager in to local storage  yi 11.29
    localStorage.setItem("alltasks", JSON.stringify(this.taskManger))
}
// Get Tasks -> returns the list of ALL tasks
getAllTasks(){
    return this.taskManger
}
// Get all Tasks with a given status -> returns a list of all tasks where a status equal to the status passes as an argument
getTasksWithStatus(status){
    let filterTask=this.taskManger.filter(task=>task.status===status)
    return filterTask
}
}

export default TaskManager