
function convert() {
  v1= parseFloat(document.getElementById('v1').value);
  sel1= parseInt(document.getElementById('sel1').value);
  sel2= parseInt(document.getElementById('sel2').value);
  if (sel1 == 1 && sel2 == 1) {
    result.innerText= v1.toFixed(4) + " BDT";
  } else if (sel1 == 2 && sel2 == 2) {
    result.innerText= v1.toFixed(4) + " USD";
  }
  else if (sel1 == 3 && sel2 == 3) {
    result.innerText= v1.toFixed(4) + " SAR";
  }
  else if (sel1 == 1 && sel2 == 2) {
    v1= v1 * 0.01179;
    result.innerText= v1.toFixed(4) + " USD";
  }
  else if (sel1 == 1 && sel2 == 3) {
    v1= v1 * 0.04423;
    result.innerText= v1.toFixed(4) + " SAR";
  }
  else if (sel1 == 2 && sel2 == 1) {
    v1 = v1 * 84.795;
    result.innerText= v1.toFixed(4) +" BDT";
  }
  else if (sel1 == 2 && sel2 == 3) {
    v1 = v1 * 3.7509;
    result.innerText= v1.toFixed(4) + " SAR";
  }
  else if (sel1 == 3 && sel2 == 1) {
    v1 = v1 * 22.6066;
    result.innerText= v1.toFixed(4) +" BDT";
  }
  else if (sel1 == 3 && sel2 == 2) {
    v1 = v1 * 0.26660;
    result.innerText= v1.toFixed(4) + " USD";
  }
 
  // result.innerText= sel1.toFixed(4);
}

