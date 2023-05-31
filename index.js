let menu =document.querySelector('.menu-icon');

menu.onclick = () =>
{
    menu.classList.toggle("move");
}

/*emailJs*/

function validate(){
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let msg= document.querySelector('.message');
    let sendBtn = document.querySelector('.btn');
   
    sendBtn.addEventListener('click',(e) => {
        e.preventDefault();
        if(name.value == "" || email.value == "" ||msg.value == ""){
            emptyerror();
        }
        else{
            sendmail(name.value , email.value, msg.value);
            success();
        }

    });
}

validate();

function sendEmail(name,email,msg){
    emailjs.send("service_ptbigfs","template_beek2f5",{
        to_name: name,
        from_name: email,
        message: msg
        });

}
function emptyerror(){
    Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'Something went wrong!',
      })
}
function success(){
    swal({
        title : "Email sent Successfully!",
        icon:"success"
    });
}



