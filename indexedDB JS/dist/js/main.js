const Submit = document.getElementById('BtnSubmit');
const arrays = []


// for (let i = 0; i <=1000; i++) {

//     addItmeTbody();
//     };


 function addItmeTbody(enter , exit){
    const display =document.querySelector('tbody');
    let row = document.createElement("tr");
    
    let enterEN = document.createElement("td");
    let enterEX = document.createElement("td");
    let action = document.createElement("td");
    var GetEnter =localStorage.getItem('enterTime');
    var GetExit  =localStorage.getItem('exitTime');
    
    enterEN.innerText=GetEnter;
    enterEX.innerText=GetExit;
    action.innerText="delete";
    row.appendChild(enterEN);
    row.appendChild(enterEX);
    display.insertBefore(row , display.childNodes[0]);
}




Submit.addEventListener("click",e=>{
    const enter_time = document.getElementById('enter').value;
    const exit_time = document.getElementById('exit').value;
    addItmeTbody(enter_time,exit_time)

    localStorage.setItem("enterTime",enter_time);
    localStorage.setItem("exitTime",exit_time);


    });

// display.innerHTML=`${GetEnter}+" and your exit time is" +${GetExit}`;


  