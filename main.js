const lista=['mela','banana','uva','bistecca','pollo'];
console.log(lista);
let i=0;
let unordered=document.querySelector('.lista');
while(i < lista.length){
    let element=document.createElement('li');
    element.innerHTML=lista[i];
    console.log(lista[i]);
    unordered.append(element);
    i++;
}