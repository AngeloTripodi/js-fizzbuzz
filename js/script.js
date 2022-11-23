for( let i=1; i<101; i++)
{
    let numero = i;

    if ((numero%3===0) && (numero%5===0)){
        numero='FizzBuzz';
    }
    else if (numero%3===0) {
        numero='Fizz'
    } 
    else if(numero%5===0){
        numero='Buzz';
    }
   
    console.log(numero);
}

