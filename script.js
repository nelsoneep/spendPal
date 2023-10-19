
var logIn = document.getElementById('loginbtn');
var formModal = document.getElementById('form-modal');
var closeBtn = document.getElementById('closeBtn');
var signUp = document.getElementById('signUpbtn');
var closeBtnn = document.getElementById('closeBtnn');
// variables of notification
var notifyBar = document.getElementById('notifyBar');
var del = document.getElementById('delete');

function emptyNotice () {
    notifyBar.style.display="none";
}

del.addEventListener("click", emptyNotice);

// populate the Notification page

function populateNotice(){
    
}

logIn.addEventListener('click',app);
function app() {
    window.location.href = "home.html";
}

closeBtn.addEventListener('click',closeApp);
function closeApp() {
    formModal.style.display = 'none';
}

// signUp.addEventListener('click',signUpD);
function signUpD(){
    formModal.style.display = 'block';
}
// closeBtnn.addEventListener('click',closeApps);
function closeApps() {
    formModal.style.display = 'none';
}

