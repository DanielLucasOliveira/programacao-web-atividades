function numeroPrimo(num){
    if(num % 2 === 0 || num % 3 === 0)
    return false;
    for(var i = 5; i * i; i += 6){
        if( num % i === 0 || num % (i + 2) === 0){
            return false
        }
        return true
    }
    
}console.log(numeroPrimo(22));