function numeroPrimo(num){
    for(var i = 3; i<num; i+=2){
        if( num % i === 0 || num % ( i + 2) === 0){
            return console.log("Não é primo");
        }
        console.log(num, "é primo");
    }
}console.log(numeroPrimo(13));