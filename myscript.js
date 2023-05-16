// Scrivere un programma che stampi in console i numeri da 1 a 100

// Per tutti i multipli di 3, deve scrivere FIZZ

// Per tutti i multipli di 5, deve scrivere BUZZ

// Per tutti i multipli di 3 e 5, deve scrivere FIZZBUZZ

const answer = ''
for (let i = 1; i <= 100 ; i++){
    const ulElement = document.querySelector('ul');
    const liElement = document.createElement ('li');
    ulElement.append(liElement);
    liElement.append(i);


    if(i%3 == 0 && i%5 == 0){
        answer.push('FizzBuzz');
    } else if (i%3 == 0){
        answer.push('FIZZ');
    } else if (i%5 == 0){
        answer.push('BUZZ');
    } else {
        answer.push(i)
    }
    
}