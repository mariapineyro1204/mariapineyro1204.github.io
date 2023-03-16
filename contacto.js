"use strict";

var aparece=document.querySelector("#aparece");
var desaparece=document.querySelector(".desaparece");

aparece.addEventListener ("click", cambiar);

function cambiar(){ 
  
  desaparece.classList.toggle("show");
  
 aparece.classList.toggle("#aparece");
} 









