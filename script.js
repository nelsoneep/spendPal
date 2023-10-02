
var logIn = document.getElementById('loginbtn');
var formModal = document.getElementById('form-modal');
var closeBtn = document.getElementById('closeBtn');
var signUp = document.getElementById('signUpbtn');
var closeBtnn = document.getElementById('closeBtnn');

logIn.addEventListener('click',app);
function app() {
    formModal.style.display = 'block';
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