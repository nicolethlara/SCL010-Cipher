/*pasar desde la pantalla uno a la pantalla explicación*/
document.getElementById("explanation").addEventListener("click", exp);
function exp() 
{
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "block";
    document.getElementById("three").style.display = "none";
}


/*volver desde la pantalla explicación a la pantalla uno*/
document.getElementById("back-button").addEventListener("click", back);
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
/*volver a la pantalla de inicio*/
document.getElementById("back-button-two").addEventListener("click", backTwo);
function backTwo()
{
    document.getElementById("one").style.display = "block";
    document.getElementById("two").style.display = "none";
    document.getElementById("three").style.display = "none";
  }
/*limpiar casillas de div three
document.getElementById("startReset").addEventListener("click", reset);
function reset() {
  document.getElementById("original-offset").value="";
  document.getElementById("original-text").value="";
  document.getElementById("cipher-text").value="";
}*/

/* comenzar a cifrar*/
document.getElementById("start-code").addEventListener("click", returnEncode);
function returnEncode() 
 {
   /*let saveMsg = document.getElementById("originalText").value.toUpperCase();
   
   let offsetNum= parseInt(document.getElementById("originalOffset").value);*/
  
 let result= cipher.encode();
   document.getElementById("cipher-text").innerHTML= result;


  /* return result;*/
       
   
   }
   
 /* comenzar a decifrar*/
document.getElementById("start-decode").addEventListener("click", returnDecode);
function returnDecode() 
 {
   /*let saveMsg = document.getElementById("originalText").value.toUpperCase();
  
   let offsetNum= parseInt(document.getElementById("originalOffset").value);*/
 
  let result= cipher.decode();
   document.getElementById("cipher-text").innerHTML= result;

  
   /*return result;*/
   }
   
  

 
   
  

 
  