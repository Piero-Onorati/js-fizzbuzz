// --------------------- BONUS -------------------- //

// for (var i = 1; i <= 100; i++){

//     if(i % 30 == 0) {
//         console.log(i + ' ' + 'FizzBuzzBoolean');
        
//     } else if (i % 15 == 0) {
//         console.log(i + ' ' + 'FizzBuzz');

//     } else if (i % 6 == 0) {
//         console.log(i + ' ' + 'FizzBoolean');
        
//     } else if (i % 5 == 0 ){
//         console.log(i + ' ' + 'Buzz');
        
//     } else if (i % 3 == 0) {
//         console.log(i + ' ' + 'Fizz');
        
//     } else{
//         console.log(i)
//     }
// }


// --------------------- BONUS (console-log a fine ciclo) -------------------- //

var result;

for (var i = 1; i <= 100; i++){

    if(i % 30 == 0) {
        result = i + ' ' + 'FizzBuzzBoolean';
        
    } else if (i % 15 == 0) {
        result = i + ' ' + 'FizzBuzz';

    } else if (i % 6 == 0) {
        result = i + ' ' + 'FizzBoolean';
        
    } else if (i % 5 == 0 ){
        result = i + ' ' + 'Buzz';
        
    } else if (i % 3 == 0) {
        result = i + ' ' + 'Fizz';
        
    } else{
        result = i
    }
    
    console.log(result)
    
}
