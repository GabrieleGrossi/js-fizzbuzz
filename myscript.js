// Scrivere un programma che stampi in console i numeri da 1 a 100

// Per tutti i multipli di 3, deve scrivere FIZZ

// Per tutti i multipli di 5, deve scrivere BUZZ

// Per tutti i multipli di 3 e 5, deve scrivere FIZZBUZZ
const ulElement = document.querySelector('ul');

for (let i = 1; i <= 100 ; i++){
    
    const liElement = document.createElement ('li');
    liElement.append(i);
    ulElement.appendChild(liElement);
    
    if(i%3 == 0 && i%5 == 0){
        console.log('FizzBuzz');
        liElement.innerHTML = 'FizzBuzz'
        liElement.classList.add('colorgreen')
    } else if (i%3 == 0){
        console.log('FIZZ');
        liElement.innerHTML = 'Fizz'
        liElement.classList.add('coloryellow')
    } else if (i%5 == 0){
        console.log('BUZZ');
        liElement.innerHTML = 'Buzz'
        liElement.classList.add('colorred')
    } else {
        console.log(i)
    }
    
}