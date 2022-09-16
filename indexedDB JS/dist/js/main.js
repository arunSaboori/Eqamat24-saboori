const tbody = document.querySelector('.tbody');

 let EnterTimeArray=[];
let ExitTimeArray=[];


time1 = JSON.parse(localStorage.getItem('Enter')); 
time2 = JSON.parse(localStorage.getItem('Exit'));
    
EnterTimeArray.push(time1);
EnterTimeArray.forEach(function(){

const td1 = document.createElement('td');
 const i = document.createElement('i');

i.className = ' fa-solid   fa-trash icon';
i.style = 'color:blue;'

const LocalStorageTime1 = document.createTextNode(EnterTimeArray);
td1.appendChild(LocalStorageTime1);
td1.appendChild(i);
tbody.appendChild(td1);
 

})
ExitTimeArray.push(time2);
ExitTimeArray.forEach(function(){


const td2 = document.createElement('td');
const i = document.createElement('i');

i.className = ' fa-solid   fa-trash icon';
i.style = 'color:blue;'

 const LocalStorageTime2 = document.createTextNode(ExitTimeArray);
 td2.appendChild(LocalStorageTime2);
td2.appendChild(i);
tbody.appendChild(td2);


})


// const td1 = document.createElement('td');
// const td2 = document.createElement('td');
// const i = document.createElement('i');

// i.className = ' fa-solid   fa-trash icon';
// i.style = 'color:blue;'

// const LocalStorageTime1 = document.createTextNode(EnterTimeArray);
// const LocalStorageTime2 = document.createTextNode(ExitTimeArray);
// td1.appendChild(LocalStorageTime1);
// td2.appendChild(LocalStorageTime2);
// td2.appendChild(i);
// tbody.appendChild(td1);
// tbody.appendChild(td2);



document.getElementById('BtnSubmit').addEventListener('click', function btn(x) {
    let EnterTime = document.querySelector('#enter').value;
    let ExitTime = document.querySelector('#exit').value;

    if (EnterTime == '' && ExitTime == '') {
        alert('both inputs are emty');
    } else if (ExitTime == '') {
        alert('Exit time is emty')
    } else if (EnterTime == '') {
        alert('Enter time are emty')
    }
    EnterTimeArray.push(EnterTime);
    ExitTimeArray.push(ExitTime);
  
    window.localStorage.setItem('Enter', JSON.stringify(EnterTimeArray));
    window.localStorage.setItem('Exit', JSON.stringify(ExitTimeArray));
    location.reload();


})




let icon = document.querySelector('.icon').addEventListener('click', function () {
    window.localStorage.removeItem('Enter');
    window.localStorage.removeItem('Exit');
    location.reload();
});

