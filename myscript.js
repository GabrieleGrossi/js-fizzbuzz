// Scrivere un programma che stampi in console i numeri da 1 a 100

// Per tutti i multipli di 3, deve scrivere FIZZ

// Per tutti i multipli di 5, deve scrivere BUZZ

// Per tutti i multipli di 3 e 5, deve scrivere FIZZBUZZ

for (let i = 1; i <= 100 ; i++){
    console.log(i)
    

    if(i%3 == 0 && i%5 == 0){
        console.log('FIZZ BUZZ');
    } else if (i%3 == 0){
        console.log('FIZZ');
    } else if (i%5 == 0){
        console.log('BUZZ');
    }

    
}