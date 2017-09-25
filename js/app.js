window.addEventListener("load", function(){
  var div = document.getElementById("div");
  var lista = document.getElementById("lista");
  var formulario = document.getElementById("formulario");
  var button = document.getElementById("boton");
  
  /* ----------- Funciones ----------- */
  function agregar(formulario, div){
    formulario.classList.toggle("none");
    div.classList.toggle("none");
  }

  function addMessage(elemento){
    elemento.lastElementChild.addEventListener("click", function(e){
      e.preventDefault();
      var mensajes = document.createElement("div");
      mensajes.innerHTML=elemento.firstElementChild.value;
      elemento.classList.add("none");
      mensajes.classList.add("mensajes");
      elemento.parentNode.insertBefore(mensajes, elemento.previousSibling);
      elemento.firstElementChild.value = "";
      elemento.previousSibling.classList.remove("none");
    });
  }

  function addEvent(elemento){
    var anchor = elemento.previousSibling;
    anchor.addEventListener("click", function(e){
      e.preventDefault();
      anchor.classList.add("none");
      elemento.classList.remove("none");      
    });
  }

  function innerCard(div, contenido,padre, clase1){
    var titulo = document.createElement(div);
    titulo.innerHTML = contenido;
    titulo.classList.add("padding");
    titulo.classList.add(clase1);
    padre.appendChild(titulo);   
  }

  function createForm(form, parent, clase, event){
    var formula = document.createElement(form);
    formula.classList.add(clase);
    formula.classList.add("none");
    parent.appendChild(formula);    
    innerCard("textarea", "", formula, "text-area");
    innerCard("button", "Guardar", formula, "button");
    if(event === true){
        addEvent(formula);
        addMessage(formula);
    }
  }
  
  function addCard(){
    var  tarjeta = document.createElement("div");
    tarjeta.classList.add("formulario");
    tarjeta.classList.add("width");
    tarjeta.classList.add("inline-block");
    innerCard("div", lista.value, tarjeta, "negrita");
    innerCard("div", "<a>Añadir una tarjeta...</a>", tarjeta, "grey");
    createForm("form",tarjeta,"formulario", true);
    return tarjeta;
  }

  
  /* ----------- Eventos ----------- */

  var close = document.getElementById("close");
  close.addEventListener("click", function(e) {
    e.preventDefault();
    agregar(formulario, div);
  });
  
  div.addEventListener("click", function() {
    agregar(formulario, div);
    lista.focus();
  });
  
  button.addEventListener("click", function(e){
    e.preventDefault();
    var addList= document.getElementById("content-lista");
    var content = addList.parentNode;
    var tarjeta = addCard();
    content.insertBefore(tarjeta,addList);  
    lista.value="";
    agregar(formulario,div);
  });
});