function num (number){
  if(document.getElementById("celda").value==""){
    document.getElementById('celda').value = number;
  }else{
    anterior = num(number);
  }
  return number;
}
