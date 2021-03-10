// Variables globales
let letras = document.getElementById("letras");
let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");
let btnC3 = document.getElementById("btnC3");
let btnD4 = document.getElementById("btnD4");
let btnE5 = document.getElementById("btnE5");
let btnF6 = document.getElementById("btnF6");
let btnG7 = document.getElementById("btnG7");
let btnH8 = document.getElementById("btnH8");
let btnI9 = document.getElementById("btnI9");
let btnJ10 = document.getElementById("btnJ10");

let letrasTemp = "";

// Logica
const logicaA1 = () => {
  letras.innerHTML = "A";
  letrasTemp = "A";
};

const logicaB2 = () => { 
    if (letrasTemp === "A") {
        letras.innerHTML = letrasTemp + "B";
        letrasTemp =  letrasTemp + "B";
    } else {
        alert("Faltan letras");
    }
  //NUMEROS
  if (letrasTemp === "ABCDEF") {
      
  } else {
      
  }
};


const logicaC3 = () => {
    if (letrasTemp === "AB") {
        letras.innerHTML = letrasTemp + "C";
        letrasTemp = letrasTemp + "C"
    } else {
        alert("Faltan letras");
    }

};

const logicaD4 = () => {
    if (letrasTemp === "ABC") {
        letras.innerHTML = letrasTemp + "D";
        letrasTemp = letrasTemp + "D"
    } else {
        alert("Faltan letras");
    }

};

const logicaE5 = () => {
    if (letrasTemp === "ABCD") {
        letras.innerHTML = letrasTemp + "E";
        letrasTemp = letrasTemp + "E"
    } else {
        alert("Faltan letras");
    }

};

const logicaF6 = () => {
    if (letrasTemp === "ABCDE") {
        letras.innerHTML = letrasTemp + "F";
        letrasTemp = letrasTemp + "F"
    } else {
        alert("Faltan letras");
    }

};

const  logicaG7  = () => {
    if (letrasTemp === "ABCDEF") {
        letras.innerHTML = letrasTemp + "G";
        letrasTemp = letrasTemp + "G"
    } else {
        alert("Faltan letras");
    }

};

const  logicaH8  = () => {
    if (letrasTemp === "ABCDEFG") {
        letras.innerHTML = letrasTemp + "H";
        letrasTemp = letrasTemp + "H"
    } else {
        alert("Faltan letras");
    }

};

const  logicaI9  = () => {
    if (letrasTemp === "ABCDEFGH") {
        letras.innerHTML = letrasTemp + "I";
        letrasTemp = letrasTemp + "I"
    } else {
        alert("Faltan letras");
    }

};

const  logicaJ10  = () => {
    if (letrasTemp === "ABCDEFGHI") {
        letras.innerHTML = letrasTemp + "J";
        letrasTemp = letrasTemp + "J"
    } else {
        alert("Faltan letras");
    }

};






// Onclick
btnA1.onclick = function () {
  logicaA1();
};

btnB2.onclick = function () {
  logicaB2();
};

btnC3.onclick = function () {
    logicaC3();
  };

  btnD4.onclick = function () {
    logicaD4();
  };
  btnE5.onclick = function () {
    logicaE5();
  };
  btnF6.onclick = function () {
    logicaF6();
  };
  btnG7 .onclick = function () {
    logicaG7();
  };
  btnH8.onclick = function () {
    logicaH8();
  };
  btnI9.onclick = function () {
    logicaI9();
  };
  btnJ10.onclick = function () {
    logicaJ10();
  };