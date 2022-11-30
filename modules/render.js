const todoContainer = document.getElementById("todo")
const progressContainer = document.getElementById("progress")
const reviewContainer = document.getElementById("review")
const doneContainer = document.getElementById("done")

// //Each time a new task is added, the render() method is called to display the new task.
const render=(taskList)=>{  
  //put to do tasks into grid
  //filter out to do tasks from array 
  const todoList=taskList.filter(element=>element.status==='TODO')
  //map each task to HTML code
  const todoTask=todoList.map((element,index)=>{
    return`<div class="col">
    <div class="card mb-3 bg-info m-2 task-box p-1 rounded shadow box-1 text-light text-center" >
      <div class="card-header bg-transparent border-light"><small class="fst-italic" >Due Date:
      ${element.dueDate}</small></div>
      <div class="card-body text-light">
        <h5>Name: ${element.name}</h5>
        <p>Description: ${element.description}</p>
        <p>Assign To: <span >${element.assignTo}</span></p>
        <p>Comment: ${element.comment}</p>
        <div class="spinner-border text-danger" role="status"> </div>
            <span class="text-danger">${element.status}</span>
          
      <div class="card-footer bg-transparent border-light">              
          <button type="submit" class="btn btn-success shadow"><a href="javascript:" class="text-decoration-none text-white" id="done" data-id=${element.id}>Done</a></button>
          <button type="submit" class="btn btn-danger shadow"><a href="javascript:" class="text-decoration-none text-white" id="del" data-id=${element.id}>Delete</a></button>
      </div>
      </div>
  </div>`
  })
  //render each task into todo task card
  todoContainer.innerHTML = todoTask.join("")

  //put in progress task into grid
  const progressList=taskList.filter(element=>element.status==='IN PROGRESS')
  //map each task to HTML code
    const progressTasks = progressList.map((element, index) => {
            return`<div class="col">
            <div class="card mb-3 bg-secondary m-2 task-box p-1 rounded shadow box-1 text-light text-center" >
              <div class="card-header bg-transparent border-light"><small class="fst-italic" >Due Date:
              ${element.dueDate}</small></div>
              <div class="card-body text-light">
                <h5>Name: ${element.name}</h5>
                <p>Description: ${element.description}</p>
                <p>Assign To: <span >${element.assignTo}</span></p>
                <p>Comment: ${element.comment}</p>
                <div class="spinner-border text-warning" role="status"> </div>
                    <span class="text-warning">${element.status}</span>
                  
              <div class="card-footer bg-transparent border-light">              
                  <button type="submit" class="btn btn-success shadow"><a href="javascript:" class="text-decoration-none text-white" id="done" data-id=${element.id}>Done</a></button>
                  <button type="submit" class="btn btn-danger shadow"><a href="javascript:" class="text-decoration-none text-white" id="del" data-id=${element.id}>Delete</a></button>
              </div>
              </div>
          </div>`
      })
      //render each task into progress task card
      progressContainer.innerHTML = progressTasks.join("")

  //put review task into grid
      const reviewList=taskList.filter(element=>element.status==='REVIEW')
      //map each task to HTML code
  const reviewTask=reviewList.map((element,index)=>{
    return`<div class="col">
    <div class="card mb-3 bg-primary m-2 task-box p-1 rounded shadow box-1 text-light text-center" >
      <div class="card-header bg-transparent border-light"><small class="fst-italic" >Due Date:
      ${element.dueDate}</small></div>
      <div class="card-body text-light">
        <h5>Name: ${element.name}</h5>
        <p>Description: ${element.description}</p>
        <p>Assign To: <span >${element.assignTo}</span></p>
        <p>Comment: ${element.comment}</p>
        <div class="spinner-border text-info" role="status"> </div>
            <span class="text-info">${element.status}</span>
          
      <div class="card-footer bg-transparent border-light">              
          <button type="submit" class="btn btn-success shadow"><a href="javascript:" class="text-decoration-none text-white" id="done" data-id=${element.id}>Done</a></button>
          <button type="submit" class="btn btn-danger shadow"><a href="javascript:" class="text-decoration-none text-white" id="del" data-id=${element.id}>Delete</a></button>
      </div>
      </div>
  </div>`
  })
  //render each task into review task card
  reviewContainer.innerHTML = reviewTask.join("")
  
  //put done task into grid
  const doneList=taskList.filter(element=>element.status==='DONE')
  //map each task to HTML code
    const doneTasks = doneList.map((element, index) => {
            return`<div class="col">
            <div class="card mb-3 bg-success m-2 task-box p-1 rounded shadow box-1 text-light text-center" >
              <div class="card-header bg-transparent border-light"><small class="fst-italic" >Due Date:
              ${element.dueDate}</small></div>
              <div class="card-body text-light">
                <h5>Name: ${element.name}</h5>
                <p>Description: ${element.description}</p>
                <p>Assign To: <span >${element.assignTo}</span></p>
                <p>Comment: ${element.comment}</p>
                <div class="spinner-border text-black-50" role="status"> </div>
                    <span class="text-black-50">${element.status}</span>
                  
              <div class="card-footer bg-transparent border-light">              
                  <button type="submit" class="btn btn-danger shadow"><a href="javascript:" class="text-decoration-none text-white" id="del" data-id=${element.id}>Delete</a></button>
              </div>
              </div>
          </div>`
      })
      //render each task into done task card
      doneContainer.innerHTML = doneTasks.join("")
}

export default render