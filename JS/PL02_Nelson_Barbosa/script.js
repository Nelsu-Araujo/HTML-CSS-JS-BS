//Ex.1
// Primeiro declaramos as variáveis
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");

// Depois as funções
function newColor() {
  const newColor = randomColor();
  this.style.backgroundColor = newColor;
}

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

// E por último os Eventos
button1.addEventListener("click", newColor);
button2.addEventListener("click", newColor);
button3.addEventListener("click", newColor);


//Ex.2

document.getElementById("Paragrafo").addEventListener("click", function () {
  const paragrafo = document.createElement("p");
  paragrafo.innerText = "É só mais um esforço para o curso de Front-end e a seguir vou de férias.";
  document.getElementById("conteudo").appendChild(paragrafo);
});

//Ex.3 e 4

document.getElementById("aumentarTexto").addEventListener("click", function () {
  const conteudo = document.getElementById("conteudo");
  const fontSize = window.getComputedStyle(conteudo).getPropertyValue("font-size");
  const currentSize = parseFloat(fontSize);
  conteudo.style.fontSize = currentSize + 2 + "px";
  conteudo.style.textAlign = 'center'; /* Altera o alinhamento para o centro */
});

document.getElementById("reduzirTexto").addEventListener("click", function () {
  const conteudo = document.getElementById("conteudo");
  const fontSize = window.getComputedStyle(conteudo).getPropertyValue("font-size");
  const currentSize = parseFloat(fontSize);
  conteudo.style.fontSize = currentSize - 2 + "px";
  conteudo.style.textAlign = 'right'; /* Altera o alinhamento para a direita */
});

//Ex.5 
function addAprendido() {
  const lista = document.getElementById("listaA").getElementsByTagName("li");
  for (let i = 0; i < lista.length; i++) {
    const text = lista[i].textContent;
    if (!text.includes("– aprendido")) {
      lista[i].textContent = text + " – aprendido";
    }
  }
}

/* Maneira de fazer o exercicio com o forEach

lista.forEach (function(i) {
  i.append('-aprendido');
});
}
*/

const button = document.getElementById("aprendido");
button.addEventListener("click", addAprendido);

//Ex.6
function addNewItem() {
  const newItem = prompt('Insira um outro aprendizado:');
  if (newItem && newItem.trim() !== '') {
      const lista = document.getElementById('listaA');
      const listItem = document.createElement('li');
      listItem.textContent = newItem;
      lista.appendChild(listItem);
  }
}

const addItem = document.getElementById('addItem');
 addItem.addEventListener('click', addNewItem);

 //Ex.7

//Primeiro ponto

 window.addEventListener("load", function() {
  console.log("A página está a carregar.");
});

//Segundo ponto

document.getElementById("botaoF").addEventListener("mouseover", function() {
  alert("Vou apanhar sol.");
});

//Terceiro ponto 

window.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      alert("Não te esqueças de entregar o trabalho.");
  }
}); 