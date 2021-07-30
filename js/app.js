const menuItens = document.querySelectorAll(".menu ul li a");

menuItens.forEach(function(item,index){item.classList.add('ativo');console.log(index);});

menuItens.forEach(function(item,index)
{
  
});

console.log(menuItens);

const imgs = document.querySelectorAll('img');
let i = 0;
imgs.forEach(function(item,index)
{
    if(item.hasAttribute('alt'))
    {
        i++;
    }
});

console.log("Imagens que possuem alt: " + i);

const hrefs = document.querySelectorAll(".menu ul li a");

hrefs.forEach(function(item,index){

  item.setAttribute('href',"hello world.exe");
});

console.log(hrefs);

