


const input1 = document.querySelector('#value1');
const input2= document.querySelector('#value2');
// const btn = document.querySelector('#btnCalcular');
const btnResult = document.querySelector('#result');
const form = document.querySelector('#form');


// console.log(input1);
// console.log(input2);
// console.log(btn);


form.addEventListener ('submit', function(event){
    
    event.preventDefault();
    const suma = (parseInt( input1.value ) + parseInt(input2.value) );
    const h1 = document.createElement('h1');
    
    h1.innerText = (`El resultado es: ${suma} `);

    btnResult.append(h1);


});