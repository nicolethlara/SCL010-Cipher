window.cipher = {

encode: () => {
  //obtener el texto ingresado
   let saveMsg = document.getElementById("original-text").value.toUpperCase();
  //obtener el offset ingresado 
   let offsetNum= parseInt(document.getElementById("original-offset").value);
  //definir la variable en donde se guardará el mensaje cifrado
   let result= "";
  //recorrer el mensaje
   for(let i = 0; i < saveMsg.length; i++) {
  //encontrar el numero ASCII del mensaje
   let firstASCII=saveMsg.charCodeAt(i);
  //aplicar la  fórmula 
   let newASCII = (firstASCII-65+offsetNum)%26+65;        
  //volver el nuevo código ASCII a letras
   result += String.fromCharCode(newASCII);
  }

 return result;
},


decode: () =>{
  //obtener el texto ingresado
   let saveMsg = document.getElementById("original-text").value.toUpperCase();
  //obtener el offset ingresado
   let offsetNum= parseInt(document.getElementById("original-offset").value);
  //definir la variable en donde se guardará el texto descifrado
   let result= "";
  //recorrer el mensaje
   for(let i = 0; i < saveMsg.length; i++) {
  //encontrar el numero ASCII del mensaje
   let firstASCII=saveMsg.charCodeAt(i);
  //aplicar la  fórmula 
   let newASCII = (firstASCII-90-offsetNum)%26+90;    
  //volver el nuevo código ASCII a letras
   result += String.fromCharCode(newASCII);
}
return result;

}

}