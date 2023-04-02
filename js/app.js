const valueCalculator = document.querySelector(".value-calculator");
const numbers = document.querySelectorAll(".key");
const cal = document.querySelector(".cal");
const ac = document.querySelector(".ac");
const keyNumber = ["1","2","3","4","5","6","7","8","9"];
const sqrt = document.querySelector(".sqrt");
const tan = document.querySelector(".tan");
const cos = document.querySelector(".cos");
const log = document.querySelector(".log");
const pow = document.querySelector(".pow");
const regexNumber = (/^\d+$/)
const error = "ERROR";
for (const item of [...numbers]) {
  item.addEventListener("click", function (e) {
    let value = item.textContent.trim();
    if(value == "π" || value == "e"){
      const endCharacter = valueCalculator.textContent.trim()[valueCalculator.textContent.trim().length-1];
      console.log(endCharacter);
      if(keyNumber.includes(endCharacter)){
        valueCalculator.textContent += "x";
      }
    }
    if (valueCalculator.textContent.trim() == "0" && value == ".") {
      valueCalculator.textContent += value;
    }
    else if (valueCalculator.textContent != "0") {
      valueCalculator.textContent += value;
    } else {
      valueCalculator.textContent = value;
    }
  });
}

const transferValue = (value) =>{
  return value.replace("÷", "/").replace("x", "*").replace("π","3.14").replace("e","2.71828182846").replace("^","**");
}

const checkNumber = (value) => {
  return regexNumber.test(value);
}

pow.addEventListener("click", function(e) {
  valueCalculator.textContent += "^";
});
ac.addEventListener("click", function (e) {
  if(valueCalculator.textContent.trim() == error){
    valueCalculator.textContent = "0";
    return;
  }
  let length = valueCalculator.textContent.length;
  valueCalculator.textContent = valueCalculator.textContent.substring(0, length - 1);
  if (valueCalculator.textContent == "") {
    valueCalculator.textContent = "0";
  }
 
});

sqrt.addEventListener("click", function(e) {
  valueCalculator.textContent = transferValue(valueCalculator.textContent);
  if(!checkNumber(valueCalculator.textContent)){
    valueCalculator.textContent = error;
    return;
  }
  valueCalculator.textContent = Math.sqrt(eval(valueCalculator.textContent.trim()));
});

tan.addEventListener("click", function(e){
  valueCalculator.textContent = transferValue(valueCalculator.textContent);
  if(!checkNumber(valueCalculator.textContent)){
    valueCalculator.textContent = error;
    return;
  }
  valueCalculator.textContent = Math.tan(eval(valueCalculator.textContent.trim()));
});

cos.addEventListener("click", function(e) {
  valueCalculator.textContent = transferValue(valueCalculator.textContent);
  if(!checkNumber(valueCalculator.textContent)){
    valueCalculator.textContent = error;
    return;
  }
  valueCalculator.textContent = Math.cos(eval(valueCalculator.textContent.trim()));
});

log.addEventListener("click", function(e) {
  valueCalculator.textContent = transferValue(valueCalculator.textContent);
  if(!checkNumber(valueCalculator.textContent)){
    valueCalculator.textContent = error;
    return;
  }
  valueCalculator.textContent = Math.log(eval(valueCalculator.textContent.trim()));
});

cal.addEventListener("click", function (e) {
  valueCalculator.textContent = transferValue(valueCalculator.textContent);
  if(!checkNumber(valueCalculator.textContent)){
    valueCalculator.textContent = error;
    return;
  }
  valueCalculator.textContent = eval(valueCalculator.textContent.trim());
  
});





//+----------------------------------------------------------------

// function set(op) {

//   document.getElementById("display").value += op;

// }

// function sqrRoot() {
//   var tempStore = document.getElementById("display").value;
//   document.getElementById("display").value = eval(Math.sqrt(tempStore));

// }

// function asine() {
//   var tempStore = document.getElementById("display").value;
//   document.getElementById("display").value = eval(Math.asin(tempStore));

// }

// function acosine() {
//   var tempStore = document.getElementById("display").value;
//   document.getElementById("display").value = eval(Math.acos(tempStore));

// }

// function fLog() {
//   var tempStore = document.getElementById("display").value;
//   document.getElementById("display").value = eval(Math.log(tempStore));

// }

// function atangent() {
//   var tempStore = document.getElementById("display").value;
//   document.getElementById("display").value = eval(Math.atan(tempStore));

// }

// function tangent() {
//   var tempStore = document.getElementById("display").value;
//   document.getElementById("display").value = eval(Math.tan(tempStore));

// }

// function cosine() {
//   var tempStore = document.getElementById("display").value;
//   document.getElementById("display").value = eval(Math.cos(tempStore));

// }

// function sine() {
//   var tempStore = document.getElementById("display").value;
//   document.getElementById("display").value = eval(Math.sin(tempStore));

// }

// function setOp() {
//   alert("gf");
//   //document.getElementById("display").value += op;
// }

// function answer() {
//   var Exp = document.getElementById("display");
//   var Exp1 = Exp.value;
//   var result = eval(Exp1);
//   //alert(result);
//   Exp.value = result;
// }

// function ce() {

//   var elem = document.getElementById("display").value;
//   var length = elem.length;
//   length--;
//   var a = elem.substr(0, length);

//   // document.getElementById("display").value="";
//   //for(var i=0;i<length-1;i++)
//   //{
//   document.getElementById("display").value = a;
//   // }
//   //alert(length);
// }