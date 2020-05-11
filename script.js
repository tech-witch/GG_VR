function openDiv(divID){
  document.getElementById(divID).style.opacity = "1";
  document.getElementById(divID).style.zIndex = "1";
}

function closeDiv(divID){
  document.getElementById(divID).style.opacity = "0";
  document.getElementById(divID).style.zIndex = "-10";
}
