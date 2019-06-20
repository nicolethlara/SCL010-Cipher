window.cipher = {

  encode: () => {
      let saveMsg = document.getElementById("originalText").value.toUpperCase();
      let offsetNum= parseInt(document.getElementById("originalOffset").value);
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
  let saveMsg = document.getElementById("originalText").value.toUpperCase();
  let offsetNum= parseInt(document.getElementById("originalOffset").value);
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