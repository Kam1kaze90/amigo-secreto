// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
   let amigoIngresado = document.getElementById("amigo").value;
   const soloLetrasYEspaciosRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

   if (amigoIngresado.trim() !== "" && soloLetrasYEspaciosRegex.test(amigoIngresado)) {
      amigoIngresado = amigoIngresado.substring(0, 1).toUpperCase() + amigoIngresado.substring(1).toLowerCase();
      amigos.push(amigoIngresado);
   } else {
      alert("Por favor, inserte un nombre.")
   }

   console.log(amigoIngresado);
   console.log(amigos);

   vaciarCampo();
}

function vaciarCampo() {
   document.getElementById("amigo").value = "";
}

function mostrarAmigos() {
   let listaMostrada = document.getElementById("listaAmigos");

   listaMostrada.innerHTML = "";

   for (let index = 0; index < amigos.length; index++) {
      let nuevoAmigo = document.createElement("li");
      nuevoAmigo.textContent = `Amigo #${index+1} ${amigos[index]}`;
      listaMostrada.appendChild(nuevoAmigo);
   }
}

function sortearAmigo() {
   if (amigos.length > 0) {
      let numeroAleatorio = Math.floor(Math.random()*amigos.length);
      document.getElementById("resultado").innerHTML = `El amigo secreto es: ${amigos[numeroAleatorio]}`;
   } else {
      alert("No existen amigos cargados.")
   }
   mostrarAmigos();
   document.getElementById("botonReinicio").style.display = "block";
}

function reiniciar() {
   amigos = [];
   document.getElementById("botonReinicio").style.display = "none";
   document.getElementById("listaAmigos").innerHTML = "";
   document.getElementById("resultado").innerHTML = "";
}

