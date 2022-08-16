const date_picker_element = document.querySelector('.d-pick');
const selected_date_element = document.querySelector('.d-pick .selected-date');
const dates_element = document.querySelector('.d-pick .dates');
const mth_element = document.querySelector('.d-pick .dates .month .mth');
const next_mth_element = document.querySelector('.d-pick .dates .month .next-mth');
const prev_mth_element = document.querySelector('.d-pick .dates .month .prev-mth');
const days_element = document.querySelector('.d-pick .dates .days');
const months = ['دی', 'بهمن', 'اسفند', 'فرودین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'اذر', 'بهمن'];
 
 let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

 
let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

  
mth_element.textContent = months[month] ; 
selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

 date_picker_element.addEventListener('click', toggleDatePicker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);

 function toggleDatePicker (e) {
	if (!checkEventPathForClass(e.path, 'dates')) {
		dates_element.classList.toggle('active');
	}
}

function goToNextMonth (e) {
	month++;
	if (month > 11) {
		month = 0;
		year++;
	}
	mth_element.textContent = months[month] ;
	populateDates();
}

function goToPrevMonth (e) {
	month--;
	if (month < 0) {
		month = 11;
		year--;
	}
	mth_element.textContent = months[month] ;
	populateDates();
}

function populateDates (e) {
	days_element.innerHTML = '';
	let amount_days = 31;

 	if (month == 1) {
		amount_days= 30;
	  } else if (month == 2) {
		amount_days= 29;
 	  } else if (month == 3){
		amount_days= 31;
	  } else if (month == 4) {
		amount_days= 31;
 	  } else if (month == 10){
		amount_days= 30;
	  } else if (month == 6) {
		amount_days= 31;
 	  } else if (month == 7){
		amount_days= 31;
	  } else if (month == 8) {
		amount_days= 31;
 	  } else if (month == 9){
		amount_days= 30;
	  } else if (month == 11) {
		amount_days= 30;
 	  } else if (month == 12){
		amount_days= 30;
	  }else {
		amount_days= 31;
 	  }  

	for (let i = 0; i < amount_days; i++) {
		const day_element = document.createElement('div');
		day_element.classList.add('day');
		day_element.textContent = i + 1;

		if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
			day_element.classList.add('selected');
		 }

		day_element.addEventListener('click', function () {
			selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
			selectedDay = (i + 1);
			selectedMonth = month;
			selectedYear = year;

			selected_date_element.textContent = formatDate(selectedDate);
			selected_date_element.dataset.value = selectedDate;

			populateDates();
		});

		days_element.appendChild(day_element);
	}
}

 function checkEventPathForClass (path, selector) {
	for (let i = 0; i < path.length; i++) {
		if (path[i].classList && path[i].classList.contains(selector)) {
			return true;
		}
	}
	
	return false;
}
function formatDate (d) {
	let day = d.getDate()  ;
	if (day < 10) {
		day = '0' + day;
	}

	let month = d.getMonth() -2;
	if (month < 10) {
		month = '0' + month;
	}

	let year = d.getFullYear()-621;

	return day + ' / ' + month + ' / ' + year;
}
