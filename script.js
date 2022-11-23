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

