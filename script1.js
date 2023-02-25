// validation code -------------------------

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  // alert('hello')
  checkData();
});

// Selectors
let signin = document.getElementById("signin");
let login = document.getElementById("login");
let userData = document.getElementById("userData");
let username = document.getElementById("name");
let email = document.getElementById("email");
let password1 = document.getElementById("password");
let password2 = document.getElementById("cpass");

// Empty array for storing data given by the user
let array = [];
let error = true;

function checkData() {
  let usernameVal = username.value.trim();
  let emailVal = email.value.trim();
  let password1Val = password1.value.trim();
  let password2Val = password2.value.trim();
  // alert(usernameVal);

  if (usernameVal == "") {
    setError(username, "Username can't be blank");
  } else if (usernameVal <= 2) {
    setError(username, "Minimum 3 characters required");
  } else {
    setSuccess(username);
    error = false;
  }

  if (emailVal == "") {
    setError(email, "Email can't be blank");
  } else if (!isEmail(emailVal)) {
    setError(email, "Email is not Valid");
  } else {
    setSuccess(email);
    error = false;
  }

  if (password1Val == "") {
    setError(password1, "Password can't be blank");
  } else {
    setSuccess(password1);
    error = false;
  }

  if (password2Val == "") {
    setError(password2, "Password can't be blank");
  } else if (password2Val == password1Val) {
    setSuccess(password2);
    error = false;
  } else {
    setError(password2, "Password did not matched");
  }

  if (!error) {

    let userData = {
      Name: usernameVal,
      Email: emailVal,
      Password: password1Val,
    };
    array.push(userData);
    saveData(array);

    // console.log(array);
    username.value = "";
    email.value = "";
    password1.value = "";
    password2.value = "";

    alert('Form submit Successfully');
    login.classList.remove('hide');
    signin.classList.add('hide');

  }
}

function setError(u, msg) {
  error = true;
  var parentBox = u.parentElement;
  parentBox.className = "error";
  var span = parentBox.querySelector("span");
  span.innerText = msg;
}

function setSuccess(u) {
  var parentBox = u.parentElement;
  parentBox.className = "success";
}

function isEmail(e) {
  var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(e);
}

// store task data in local storage in form of string
function saveData(array) {
  let str = JSON.stringify(array);
  localStorage.setItem("data", str);
  // showData();
}

// Get data from local storage in form of object
let objStr = localStorage.getItem("data");
if (objStr != null) {
  array = JSON.parse(objStr);
  // console.log(array);
}

// verify login emain and password
function loginPage() {
  let loginVal = document.getElementById("loginemail").value;
  // console.log(loginVal);
  let loginPass = document.getElementById("loginpass").value;
  // console.log(loginPass);

  const datastr = localStorage.getItem("data");
  const data = JSON.parse(datastr);
  // console.log(data);
  if (loginVal == data[0].Email && loginPass == data[0].Password) {
    // console.log(loginVal, loginPass);
    login.classList.add('hide');
    userData.classList.remove('hide');
    showuserData();
    return;
  } else {
    alert("Email or password is incorrect");
  }
}

function showuserData() {
  const data = localStorage.getItem('data');
  const getData = JSON.parse(data);
  // console.log(getData);
  document.getElementById('username').innerHTML += getData[0].Name;
  document.getElementById('useremail').innerHTML += getData[0].Email;
}

//login button function (Navbar)
function showLoginPage() {
  userData.classList.add('hide');
  signin.classList.add('hide');
  login.classList.remove('hide');
}

//signin button function (Navbar)
function showsigninPage() {
  userData.classList.add('hide');
  signin.classList.remove('hide');
  login.classList.add('hide');
}

//Logout button function
function logout() {
  userData.classList.add('hide');
  signin.classList.add('hide');
  login.classList.remove('hide');
}