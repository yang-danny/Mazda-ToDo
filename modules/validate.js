// task 4
const taskName = document.getElementById("taskName");
const taskDes = document.getElementById("taskDes");
const dueDate = document.getElementById("dueDate");

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

export default validate