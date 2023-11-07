const rating = document.querySelector('.rating'); 
const child = document.querySelectorAll('.child'); 
const feedback_section = document.querySelector('.feedback-section'); 
const btn = document.querySelector('#btn'); 

let icon;
rating.addEventListener('click',(event)=>{
    icon = event.target.parentNode;

    for(let i=0; i<child.length;i++){
        child[i].classList.remove('active');
    }


    if(!icon.classList.contains('active')){
        icon.classList.add('active');
    }
});


btn.addEventListener('click',()=>{
    console.log('Hello')
    console.log(icon);
    let userFeedback;
    let userFeedbackEmoji;

    if(icon===undefined){
        userFeedback="";
    }
    else{
        userFeedback=icon.children[1].innerText;
        console.log("This is "+userFeedback)
        userFeedbackEmoji=icon.children[0].innerText;

    }


    if(userFeedback!==""){
        console.log("reached");
        feedback_section.innerHTML=`
        <div class="response-screen">
        <p>${userFeedbackEmoji}</p>
        <h3>Your feedback: ${userFeedback}</h3>
        <p>Thank you for your response</p>
        <div class='feedback-button'>
            <a href='index.html'>Back</a>
        </div>
        </div>`;
    }



});