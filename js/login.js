const loginEmail = document.getElementById('email');
const loginPassword = document.getElementById('password');

 let getEmailFormLocalStorageData = localStorage.getItem("email");
 listEmail = JSON.parse(getEmailFormLocalStorageData);
 loginEmail.value = listEmail[0];

 let getPasswordFormLocalStorageData = localStorage.getItem("password");
 listPassword = JSON.parse(getPasswordFormLocalStorageData);
 loginPassword.value = listPassword[0];

