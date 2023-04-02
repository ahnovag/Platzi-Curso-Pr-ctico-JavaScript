



const placeholder1 = document.querySelector("#placeholder");


console.log(placeholder1);



const p = document.querySelector('p');
const img = document.createElement('img');



img.setAttribute('src', 'poke.jpg');
p.appendChild(img);

const newEti = document.createElement('h1');


const button = img;

// Evento cambia la poke por un charizard
button.addEventListener ('click', function(event){
    
    p.append(newEti);
    
    newEti.innerHTML = ('Esto es un charizard');
    img.setAttribute('src','charizard.png');

});
