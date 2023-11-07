const daysEl  =  document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes'); 
const secsEL = document.getElementById('secs');


const newYear='1 Jan 2024'
function countdown(){
    const newYearDate=new Date(newYear);
    const currentDate=new Date();
    const seconds= (newYearDate - currentDate)/1000;
    const days = Math.floor(seconds/3600/24);
    const hours=Math.floor(seconds/3600)%24;
    const minutes=Math.floor(seconds/60)%60;
    const secs= Math.floor((newYearDate - currentDate)/1000)%60;
    console.log(days,hours,minutes,secs);


    daysEl.innerHTML=days;
    hoursEl.innerHTML=formatTime(hours);
    minutesEl.innerHTML=formatTime(minutes);
    secsEL.innerHTML=formatTime(secs);

}

function formatTime(time){
    return time < 10 ? `0${time}`:time;
}



countdown();

setInterval(countdown,1000);
