function yearselect(){
  var d =document.getElementById("year-select");
  var displaytextd =d.options[d.selectedIndex].text;
  document.getElementById("year-input").value=displaytextd;
  
  }
function monthselect(){
  var t =document.getElementById("monthss");
  var displaytext =t.options[t.selectedIndex].text;
  document.getElementById("month-input").value=displaytext;

 }
function dayselect(){
  var s =document.getElementById("day-select");
  var displaytexts =s.options[s.selectedIndex].text;
  document.getElementById("day-input").value=displaytexts;


 }
function sub(){
  var d =document.getElementById("year-select");
  var displaytextd =d.options[d.selectedIndex].text;
  var t =document.getElementById("monthss");
  var displaytext =t.options[t.selectedIndex].text;
  var s =document.getElementById("day-select");
  var displaytexts =s.options[s.selectedIndex].text;

 alert(displaytextd +"/"+ displaytext+"/"+displaytexts);
}