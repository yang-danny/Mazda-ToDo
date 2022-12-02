
let storedUser = JSON.parse(localStorage.getItem('regUser'))||[];
let loginUser = JSON.parse(localStorage.getItem('loginUser'))||[];
const loginEmail=document.getElementById("loginEmail");
const loginPassword=document.getElementById("loginPassword");
const regUser=document.getElementById("regUser");
const regEmail=document.getElementById("regEmail");
const regPassword=document.getElementById("regPassword");
const confirmPassword=document.getElementById("confirmPassword");
const btnLogin=document.getElementById("btnLogin");
const btnRegister=document.getElementById("btnRegister")

const emailError=document.getElementById("email-error")
const passError=document.getElementById("password-error")
const userError=document.getElementById("user-error")
const regEmailError=document.getElementById("reg-email-error")
const regPasswordError=document.getElementById("reg-password-error")
const confirmError=document.getElementById("confirm-error")

//validation for not null
const isRequired = value => value === '' ? false : true;

//validation for checking email address
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

//validation for checking password must minmal 6 digits with numbers, characters and at least one UPCASE character
const isPasswordSecure = (pass) => {
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return re.test(pass);
};

//validation for Login email
const validateLoginEmail = () => {
    let valid = false;
    //removes whitespace from both sides of a string.
   const email=loginEmail.value.trim();
   //validcation for email address
    if (!isRequired(email) || !isEmailValid(email)) {
        //validation failed, post error message
        loginEmail.classList.remove('border-success');
        loginEmail.classList.add('border-danger');
        emailError.innerHTML = '<i class="fa-solid fa-circle-xmark fs-5 p-1 pt-2 text-danger"></i>';
    } else {
        //validation success, post success message
        loginEmail.classList.remove('border-danger');
        loginEmail.classList.add('border-success');
        emailError.innerHTML = '<i class="fa-solid fa-circle-check fs-5 p-1 pt-2 text-success"></i>';
        valid = true;
    }
    return valid;
};

//validation for Login password
const validateLoginPassword = () => {
    let valid = false;
    //removes whitespace from both sides of a string.
    const pass = loginPassword.value.trim();
   //validcation for password
    if (!isRequired(pass)||!isPasswordSecure(pass)) {
       //validation failed, post error message
        loginPassword.classList.remove('border-success');
        loginPassword.classList.add('border-danger');
        passError.innerHTML= '<i class="fa-solid fa-circle-xmark fs-5 p-1 pt-2 text-danger"></i>';
    } else {
        //validation success, post success message
        loginPassword.classList.remove('border-danger');
        loginPassword.classList.add('border-success');
        passError.innerHTML= '<i class="fa-solid fa-circle-check fs-5 p-1 pt-2 text-success"></i>';
        valid = true;
    }
    return valid;
};

//validation for Register username
const validateUser = () => {
    let valid = false;
    //removes whitespace from both sides of a string.
   const user=regUser.value.trim();
   //validation for Register username must at least 5 characters
    if (user.length<5) {
         //validation failed, post error message
        regUser.classList.remove('border-success');
        regUser.classList.add('border-danger');
        userError.innerHTML = '<i class="fa-solid fa-circle-xmark fs-5 p-1 pt-2 text-danger"></i>';
    } else {
          //validation success, post success message
        regUser.classList.remove('border-danger');
        regUser.classList.add('border-success');
        userError.innerHTML = '<i class="fa-solid fa-circle-check fs-5 p-1 pt-2 text-success"></i>';
        valid = true;
    }
    return valid;
};

//validation for Register email
const validateRegEmail = () => {
    let valid = false;
    //removes whitespace from both sides of a string.
   const email=regEmail.value.trim();
   //validation for Register email
    if (!isRequired(email) || !isEmailValid(email)) {
        //validation failed, post error message
        regEmail.classList.remove('border-success');
        regEmail.classList.add('border-danger');
        regEmailError.innerHTML = '<i class="fa-solid fa-circle-xmark fs-5 p-1 pt-2 text-danger"></i>';
    } else {
          //validation success, post success message
        regEmail.classList.remove('border-danger');
        regEmail.classList.add('border-success');
        regEmailError.innerHTML = '<i class="fa-solid fa-circle-check fs-5 p-1 pt-2 text-success"></i>';
        valid = true;
    }
    return valid;
};

//validation for Register password
const validateRegPassword = () => {
    let valid = false;
    //removes whitespace from both sides of a string.
    const pass = regPassword.value.trim();
//validation for Register password
    if (!isRequired(pass)||!isPasswordSecure(pass)) {
       //validation failed, post error message
        regPassword.classList.remove('border-success');
        regPassword.classList.add('border-danger');
        regPasswordError.innerHTML= '<i class="fa-solid fa-circle-xmark fs-5 p-1 pt-2 text-danger"></i>';
    } else {
        //validation success, post success message
        regPassword.classList.remove('border-danger');
        regPassword.classList.add('border-success');
        regPasswordError.innerHTML= '<i class="fa-solid fa-circle-check fs-5 p-1 pt-2 text-success"></i>';
        valid = true;
    }
    return valid;
};

//validation for confirm password
const validateConfitmPassword = () => {
    let valid = false;
        //removes whitespace from both sides of a string.
    const pass = confirmPassword.value.trim();
//validation for confirm password
    if (!isRequired(pass)||!isPasswordSecure(pass) || pass!==regPassword.value.trim()) {
        //validation failed, post error message
        confirmPassword.classList.remove('border-success');
        confirmPassword.classList.add('border-danger');
        confirmError.innerHTML= '<i class="fa-solid fa-circle-xmark fs-5 p-1 pt-2 text-danger"></i>';
    } else  {
        //validation success, post success message
        confirmPassword.classList.remove('border-danger');
        confirmPassword.classList.add('border-success');
        confirmError.innerHTML= '<i class="fa-solid fa-circle-check fs-5 p-1 pt-2 text-success"></i>';
        valid = true;
    }
    return valid;
};

//function to check Login user data
const checkLogintUser=(userArray, email, pwd)=>{
    // loop for checking all stored users in local storage
    for (let i=0; i<userArray.length;i++){
        //located user in local storage
        if(userArray[i].email===email && userArray[i].password===pwd){
            //add username as loginUser in local storage
            loginUser.push(userArray[i].username)
            localStorage.setItem('loginUser', JSON.stringify(loginUser));
            return true;
        }
    }
    return false;
}

//function to check user already registed
const checkExistUser=(userArray, email)=>{
    // loop for checking all stored users in local storage
    for (let i=0; i<userArray.length;i++){
        //located this user has been registed
        if(userArray[i].email===email){
            return true;
        }
    }
    return false;
}

//Login button event
btnLogin.addEventListener('click',(e)=>{
    //check validation
    if(!validateLoginEmail()||!validateLoginPassword())
    {
       // validation failed
       return validateLoginEmail()
    } else if(storedUser.length===0)
    {
        //User not exit
        alert('Please Register a user befor Login.')
    }
    else{
        //check user from stored users in local storage
    const login=checkLogintUser(storedUser,loginEmail.value,loginPassword.value) && loginUser.length   
        if(login){
            //Login success and nav to index page
              window.location.replace("index.html"); 
        } else {
            //Login failed
            alert('Login in Failed.')
        }  
    }
})

//Register button event
btnRegister.addEventListener('click',(e)=>{
    //validation for input data
   if( validateUser() && validateRegEmail() && validateRegPassword() && validateConfitmPassword()){
    //validation sccess, assign input data into data object
    let regUserData={
        username:regUser.value.trim(),
email:regEmail.value.trim(),
password:regPassword.value.trim(),
    }
    //check user already registed
    let exist=storedUser.length && checkExistUser(storedUser,regEmail.value);
    if(!exist){
        //Register to be a new user and save to local storage
                 storedUser.push(regUserData);
                 localStorage.setItem('regUser', JSON.stringify(storedUser));
                 loginUser[0]=regUserData.username
                 localStorage.setItem('loginUser', JSON.stringify(loginUser));
                 window.location.replace("index.html");
            } else{
                alert('This user is already registed.');
             }

   } else {
    //validation fialed
    return validateUser()
   }
})