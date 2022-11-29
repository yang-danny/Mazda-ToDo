const itemsContainer = document.getElementById("list-items")

// //Each time a new task is added, the render() method is called todisplay the new task.
const render=(taskList)=>{  
    const tasks = taskList.map((element, index) => {
        //check task status
        if(element.status!=='DONE'){
            return` <div class="col">
            <div class="card mb-3 bg-info m-2 task-box p-1 rounded shadow box-1 text-light text-center" >
              <div class="card-header bg-transparent border-light"><small class="fst-italic" >Due Date:
              ${element.dueDate}</small></div>
              <div class="card-body text-light">
                <h5>Name: ${element.name}</h5>
                <p>Description: ${element.description}</p>
                <p>Assign To: <span >${element.assignTo}</span></p>
                <p>Comment: ${element.comment}</p>
                <div class="spinner-border text-light" role="status"> </div>
                    <span >${element.status}</span>
                  
              <div class="card-footer bg-transparent border-light">              
                  <button type="submit" class="btn btn-success shadow"><a href="javascript:" class="text-decoration-none text-white" id="done" data-id=${index}>Done</a></button>
                  <button type="submit" class="btn btn-danger shadow"><a href="javascript:" class="text-decoration-none text-white" id="del" data-id=${index}>Delete</a></button>
              </div>
            </div>
          </div>`
        } else {
            //task status is done, remove DONE button
            return` <div class="col">
            <div class="card mb-3 bg-info m-2 task-box p-1 rounded shadow box-1 text-light text-center" >
              <div class="card-header bg-transparent border-light"><small class="fst-italic" >Due Date:
              ${element.dueDate}</small></div>
              <div class="card-body text-light">
                <h5>Name: ${element.name}</h5>
                <p>Description: ${element.description}</p>
                <p>Assign To: <span >${element.assignTo}</span></p>
                <p>Comment: ${element.comment}</p>
                <div class="spinner-border text-light" role="status"> </div>
                    <span >${element.status}</span>
                  
              <div class="card-footer bg-transparent border-light">              
                
                  <button type="submit" class="btn btn-danger shadow"><a href="javascript:" class="text-decoration-none text-white" id="del" data-id=${index}>Delete</a></button>
              </div>
            </div>
          </div>`
        }
       
})
    itemsContainer.innerHTML = tasks.join("")
}

export default render