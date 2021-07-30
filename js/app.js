const imgsAnimais = document.querySelectorAll("img");
const imagemArray = Array.from(imgsAnimais);
console.log(imagemArray);

//SELECIONAR TODAS AS IMAGENS QUE COMEÇAM COM A PALAVRA IMAGEM
const imgStart = document.querySelectorAll("img[src^='/img/imagem']");
const imgArray = Array.from(imgStart);
console.log(imgArray);
//SELECIONAR TODAS AS IMAGENS QUE COMEÇAM COM A PALAVRA IMAGEM

//SELECTIONE TODOS OS LINKS INTERNOS
const hrefAnimais = document.querySelectorAll("a[href^='#']");
const hrefArray = Array.from(hrefAnimais);
console.log(hrefArray);
//SELECTIONE TODOS OS LINKS INTERNOS

//SELECIONA APENAS 1 H2 DENTRO DE ANIMAIS DESCRICAO
const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);
//SELECIONA APENAS 1 H2 DENTRO DE ANIMAIS DESCRICAO

//SELECIONA APENAS O ÚLTIMO P  DENTRO DO SITE
const lastP = document.querySelectorAll('p');
console.log(lastP[--lastP.length]);
//SELECIONA APENAS O ÚLTIMO P  DENTRO DO SITE