

function addc() {
  var inputc = document.getElementById("inputc").value;
  document.getElementById("labelc").innerText = Number(document.getElementById("labelc").innerHTML) + Number(inputc);
  event.preventDefault();
}

function subc() {
  var inputc = document.getElementById("inputc").value;
  document.getElementById("labelc").innerText = Number(document.getElementById("labelc").innerHTML) - Number(inputc);
  event.preventDefault();
}



function addj() {
  var inputj = document.getElementById("inputj").value;
  document.getElementById("labelj").innerText = Number(document.getElementById("labelj").innerHTML) + Number(inputj);
  event.preventDefault();
}

function subj() {
  var inputj = document.getElementById("inputj").value;
  document.getElementById("labelj").innerText = Number(document.getElementById("labelj").innerHTML) - Number(inputj);
  event.preventDefault();
}




function addp() {
  var inputp = document.getElementById("inputp").value;
  document.getElementById("labelp").innerText = Number(document.getElementById("labelp").innerHTML) + Number(inputp);
  event.preventDefault();
}

function subp() {
  var inputp = document.getElementById("inputp").value;
  document.getElementById("labelp").innerText = Number(document.getElementById("labelp").innerHTML) - Number(inputp);
  event.preventDefault();
}



function adds() {
  var inputs = document.getElementById("inputs").value;
  document.getElementById("labels").innerText = Number(document.getElementById("labels").innerHTML) + Number(inputs);
  event.preventDefault();
}

function subs() {
  var inputs = document.getElementById("inputs").value;
  document.getElementById("labels").innerText = Number(document.getElementById("labels").innerHTML) - Number(inputs);
  event.preventDefault();
}



// function showbtn() {
//   var inputs = document.getElementById("inputs").value;
//   var inputj = document.getElementById("inputj").value;
//   var inputc = document.getElementById("inputc").value;
//   var inputp = document.getElementById("inputp").value;
// }