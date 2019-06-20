/*pasar desde la pantalla uno a la pantalla explicación*/
document.getElementById("explanation").addEventListener("click", exp);
function exp() 
{
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "block";
    document.getElementById("three").style.display = "none";
}
/*volver desde la pantalla explicación a la pantalla uno*/
document.getElementById("backButton").addEventListener("click", back);
function back()
{
    document.getElementById("one").style.display = "block";
    document.getElementById("two").style.display = "none";
    document.getElementById("three").style.display = "none";
}
/*ir desde la pantalla uno a la pantalla de tres, para cifrar o descifrar*/
document.getElementById("encode").addEventListener("click", start);
function start() 
{
     document.getElementById("one").style.display = "none";
     document.getElementById("two").style.display = "none";
     document.getElementById("three").style.display = "block";
}
/*limpiar casillas de div three*/
document.getElementById("startReset").addEventListener("click", reset);
function reset() {
  document.getElementById("originalOffset").value="";
  document.getElementById("originalText").value="";
  document.getElementById("cipherText").value="";
}

/* comenzar a cifrar*/
document.getElementById("startCode").addEventListener("click", returnEncode);
function returnEncode() 
 {
   /*let saveMsg = document.getElementById("originalText").value.toUpperCase();
   
   let offsetNum= parseInt(document.getElementById("originalOffset").value);*/
  
 let result= cipher.encode();
   document.getElementById("cipherText").innerHTML= result;


  /* return result;*/
       
   
   }
   
 /* comenzar a decifrar*/
document.getElementById("startDecode").addEventListener("click", returnDecode);
function returnDecode() 
 {
   /*let saveMsg = document.getElementById("originalText").value.toUpperCase();
  
   let offsetNum= parseInt(document.getElementById("originalOffset").value);*/
 
  let result= cipher.decode();
   document.getElementById("cipherText").innerHTML= result;

  
   /*return result;*/
   }
   
  

 
   
  

 
  