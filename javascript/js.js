var ejerciciosJsonRequestUrl="javascript/ejercicios.json";
var ejemplosJsonRequestUrl="javascript/ejemplos.json";
var destinocontenido=document.querySelector("#items");
var peticion= new XMLHttpRequest();
var c=0;
inicio();



$("#ejemploLink").click(function(){cargar("ejemplo")});
$("#ejercicioLink").click(function(){cargar("ejercicio")});

function inicio(){
  cargar("ejercicio");
}

function cargar(tipo){
if (tipo=="ejercicio") {
  peticion.open('GET', ejerciciosJsonRequestUrl);

}else if (tipo=="ejemplo") {
  peticion.open('GET', ejemplosJsonRequestUrl);

}else {
alert("ERROR DE TIPO");
}
if(c==1){
  removeAllChilds(destinocontenido);
}
if(c==0){
  c=1;
}


peticion.responseType='json';
peticion.send();
peticion.onload=function(){
  var datos=peticion.response;
  llenadoContenido(datos);
  function llenadoContenido(objetoJson){
   for(i=0;i<datos.length;i++){


     var envoltura=document.createElement('div');
     envoltura.className+="col-sm-12 col-md-3";
     destinocontenido.appendChild(envoltura);
     var im=document.createElement('img');
     im.className+="imagenesContenido";
     im.setAttribute("src",datos[i].imagen);
     envoltura.appendChild(im);
     var h2=document.createElement("h4");
     h2.className+="centrados";
     h2.textContent=datos[i].titulo;
     envoltura.appendChild(h2);

     var link=document.createElement("a");
     link.setAttribute("href",datos[i].link);
     envoltura.appendChild(link);
     var im2=document.createElement("img");
     im2.className+="imagenesPequeñas";
     im2.setAttribute("src","https://static.vecteezy.com/system/resources/previews/000/554/223/non_2x/plus-sign-vector-icon.jpg");
     link.appendChild(im2);

   }
  }
}
}
function removeAllChilds(a)
 {
   if(a !== null){
          while (a.hasChildNodes()){
              a.removeChild(a.lastChild);
          }
 }
 else {
   console.log("no hay na");
 }
}
