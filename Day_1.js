/* 
problem - Write a function createHelloWorld. It should return a new function that always returns "Hello World".
*/

// solution
var createHelloWorld = function() {
    
    return function() {
        
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */