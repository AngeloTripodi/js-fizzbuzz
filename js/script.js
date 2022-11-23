let numberToAppend= '';


for( let i=1; i<101; i++)
{
    let numero = i;
    if ((i%3===0) && (i%5===0)){
        numero ='FizzBuzz';

    }
    else if (i%3===0) {
        numero='Fizz'
    } 
    else if(i%5===0){
        numero='Buzz';
    }
 
    console.log(numero);

    

    if (numero == 'FizzBuzz'){
        numberToAppend +=`
        <p class="color-blue">${numero}</p>
        `;
    }

    else if(numero == 'Fizz'){
        numberToAppend +=`
        <p class="color-red">${numero}</p>
        `;
    }

    else if(numero == 'Buzz'){
        numberToAppend +=`
        <p class="color-green">${numero}</p>
        `;
    }
    else{
        numberToAppend +=`
        <p>${numero}</p>
        `;
    }
}

document.querySelector('.number').innerHTML = numberToAppend;







