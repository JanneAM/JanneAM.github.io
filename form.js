let getValue = (id) => document.getElementById(id).value;
const submitBtn = getById("submit");


function validateForm (){
    nameValue = getValue("name");
    emailValue = getValue("email");
    messageValue = getValue("message");

    /**Validate name */
    if (typeof(nameValue)!="string" || nameValue.length == 0) alert("name can't be empty")
    /**Validate email */
    if (typeof(emailValue)!="string" ||
        emailValue.length == 0 || 
        emailValue.indexOf("@")< 0 ||
        emailValue.indexOf(".")< 1 ) alert("invalid email")
    /**Validate message */
    if (typeof(messageValue)!="string" || messageValue.length == 0) alert("message can't be empty")
}

submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    validateForm(e)})