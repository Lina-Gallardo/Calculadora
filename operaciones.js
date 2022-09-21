let respuesta ="El resultado de la ";
function getnumber() {
  let num1 = parseInt(document.getElementById('celda1').value);
  let num2 = parseInt(document.getElementById('celda2').value);
  return [num1,num2];
}
let suma = (num) => document.getElementById('result').value = respuesta + " suma es: "+ (num[0] + num[1]);
let resta = (num) => document.getElementById('result').value = respuesta + " resta es: "+ (num[0] - num[1]);
let multi = (num) => document.getElementById('result').value = respuesta + " multiplicacion es: "+ (num[0] * num[1]);
let div = (num) => document.getElementById('result').value = respuesta + " Division es: "+ (num[0] / num[1]);
