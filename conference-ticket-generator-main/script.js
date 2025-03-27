const email_value = document.querySelector(".email-input");
const generateTicketBtn = document.querySelector(".ticket-generate-btn");
const fullName = document.querySelector(".name-input");
const githubUsername = document.querySelector(".github-name");


const previewIMG = document.querySelector(".upload-icon img");
const dropArea = document.querySelector(".file-upload");
const fileInput = document.getElementById("fileinput");
const errorMsg = document.querySelector(".error-message");
const rememberMsg = document.querySelector(".remember");
const imageOptions = document.querySelector(".image-options");
const removeImage = document.querySelector(".image-options .remove");
const changeImage = document.querySelector(".image-options .change");
const drag_drop = document.querySelector(".drag-drop");

removeImage.addEventListener("click", (e) => {
    previewIMG.src = 'assets/images/icon-upload.svg';
    drag_drop.style.display = "flex";
    imageOptions.style.display = "none";
    savedImage = null;
    e.preventDefault();
})

const MAX_SIZE = 500 * 1024; // 500KB
let savedImage = null;

function handleFile(file) {
    if(file.size > MAX_SIZE) {
        rememberMsg.style.display = "none";
        errorMsg.style.display = "flex";
        errorMsg.textContent = "File too large. Please upload a photo under 500kb.";
        return;
    }else{
        rememberMsg.style.display = "flex";
        errorMsg.style.display = "none";
    }


    const reader = new FileReader();
    reader.onload = function(e) {
        previewIMG.src = e.target.result;
        savedImage = e.target.result;
        drag_drop.style.display = "none";
        imageOptions.style.display = "flex";
    };
    reader.readAsDataURL(file);
}

//Drag & Drop Events
dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("drag-over");
});
dropArea.addEventListener("dragleave", (e) => {
    e.preventDefault();
    dropArea.classList.remove("drag-over");
});
const dropareafunc = (e) => {
    e.preventDefault();
    dropArea.classList.remove("drag-over");
    
    const file = e.dataTransfer.files[0];
    if(file){
        handleFile(file);
    }
}

dropArea.addEventListener("drop", dropareafunc);

//Click to upload
dropArea.addEventListener("click", () => fileInput.click());
changeImage.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if(file){
        handleFile(file);
    }
})


const emailErrorCheck = (email) => {
    //let email = email_value.value.trim();
    let EmailerrMsg = document.querySelector(".email-error-msg p");
    let EmailerrMsgDIV = document.querySelector(".email-error-msg");
    const emailPattern = /^[a-zA-Z0-9._%=-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(email === ""){
        EmailerrMsgDIV.style.display = "flex";
        email_value.classList.add("error");
        EmailerrMsg.textContent = "Email field is required";
        return false;
    }else if(emailPattern.test(email)){
        EmailerrMsgDIV.style.display = "none";
        email_value.classList.remove("error");
        return true;
    }else{
        EmailerrMsgDIV.style.display = "flex";
        email_value.classList.add("error");
        EmailerrMsg.textContent = "Email format not valid";
        return false;
    }
}

function nameErrorChecker(name) {
    let nameErrorMsg = document.querySelector(".name-error-msg");
    let nameInput = nameErrorMsg.parentElement.children[1];
    if(name === ""){
        nameErrorMsg.style.display = "flex";
        nameInput.style.border = "1px solid #F47363";
        return false;
    }else {
        nameErrorMsg.style.display = "none";
        nameInput.style.border = "1px solid var(--Neutral-300)";
        return true;
    }
}

function githubErrorChecker(githubID) {
    let githubErrorMsg = document.querySelector(".github-error-msg");
    let gitInput = githubErrorMsg.parentElement.children[1];
    if(githubID === ""){
        githubErrorMsg.style.display = "flex";
        gitInput.style.border = "1px solid #F47363";
        return false;
    }else {
        githubErrorMsg.style.display = "none";
        gitInput.style.border = "1px solid var(--Neutral-300)";
        return true;
    }
}

const userTicketDetails = (email, name, savedImage, githubID)=>{
    const formContainer = document.querySelector(".ticket-container");
    const userTicket = document.querySelector(".user-ticket");
    formContainer.style.display = "none";
    userTicket.style.display = "flex";

    let userName = document.querySelector(".user-name");
    let userEmail = document.querySelector(".user-email");
    let userIMG = document.querySelector(".user-img img");
    let userGitTag = document.querySelector(".user-git-tag");
    let userTicketName = document.querySelector(".ticket-name");
    let userTag = document.querySelector(".user-id");

    userName.textContent = name;
    userEmail.textContent = email;
    userIMG.textContent = savedImage.src;
    userTicketName.textContent = name;
    userGitTag.textContent = githubID;
    userTag.textContent = `#${Math.floor(Math.random() * 1000) + 100}`;

}

function isImage() {
    let isImageUploaded = savedImage !== null;
    if(isImageUploaded){
        dropArea.removeEventListener("drop", dropareafunc);
    }
}
setInterval(isImage, 2000);

function isFormValid () {
    let githubID = githubUsername.value.trim();
    let name = fullName.value.trim();
    let email = email_value.value.trim();
    let isEmailValid =  emailErrorCheck(email);
    let isImageUploaded = savedImage !== null;
    console.log(isImageUploaded)
    let isNameValid = nameErrorChecker(name);
    let isGithubValid = githubErrorChecker(githubID);
    let userImage = document.querySelector(".user-img img").src = savedImage;

    if(isEmailValid && isImageUploaded && isNameValid && isGithubValid){
        userTicketDetails(email, name, userImage, githubID);
    }
    else if(!isImageUploaded){
        errorMsg.style.display = "flex";
        rememberMsg.style.display = "none";
        errorMsg.textContent = "Please upload an image";
    }else{
        console.log("Something went wrong...");
    }
}

generateTicketBtn.addEventListener("click", isFormValid);
