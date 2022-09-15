//     let EnterTime=document.querySelector('#enter').value;
//     let ExitTime =document.querySelector('#exit').value;

//      let time;
//     if (window.localStorage.getItem('Enter')==''){
    //     time =[];
    //     }else if(window.localStorage.getItem('Exit')==''){
        //      time =[];
        //     }else{
            //         JSON.parse.localStorage.getItem('Enter');
            //         JSON.parse.localStorage.getItem('Exit');
            //     }
            //    time.push(EnterTime);
            //    time.push(ExitTime);
            const tbody = document.querySelector('.tbody');

            let ShowEnterArray=[];
            let ShowExitArray=[];
            
            ShowEnterArray.push(JSON.parse(window.localStorage.getItem('Enter')))
            ShowExitArray.push(JSON.parse(window.localStorage.getItem('Exit')))
             
document.getElementById('BtnSubmit').addEventListener('click',function btn(){
    let EnterTimeArray=[];
    let ExitTimeArray=[];

    let EnterTime=document.querySelector('#enter').value;
    let ExitTime =document.querySelector('#exit').value;
    
    EnterTimeArray.push(EnterTime);
    ExitTimeArray.push(ExitTime);

    if(EnterTime==''&& ExitTime==''){
         alert('both inputs are emty');
    }else if(ExitTime==''){ 
       alert('Exit time is emty') 
    }else if(EnterTime==''){
        alert('Enter time are emty')
    }    

   
   window.localStorage.setItem('Enter',JSON.stringify.appendChild(EnterTimeArray)); 
   window.localStorage.setItem('Exit',JSON.stringify.appendChild(ExitTimeArray)); 

   
  

})   


// let ShowEnter=JSON.parse(window.localStorage.getItem('Enter'));
// let ShowExit =JSON.parse(window.localStorage.getItem('Exit'));
const  td1 = document.createElement('td');
const  td2 = document.createElement('td');
const   i  = document.createElement('i');

i.className = ' fa-solid   fa-trash icon';
i.style='color:blue;'

const LocalStorageTime1 = document.createTextNode(ShowEnterArray);
const LocalStorageTime2 = document.createTextNode(ShowExitArray);
td1.appendChild(LocalStorageTime1);
td2.appendChild(LocalStorageTime2);
td2.appendChild(i);
tbody.appendChild(td1);
tbody.appendChild(td2);


let icon = document.querySelector('.icon').addEventListener('click',function(){
    window.localStorage.removeItem('Enter');
    window.localStorage.removeItem('Exit');
 });