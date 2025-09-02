// Counter problem solved by using JS closures which allow inner functions to access variables outside of their direct scope.


/**
 * @param {number} n
 * @return {Function} counter
 **/
var createCounter = function counter(n) {
    let current = n; //current variable in the outer function's scope.
    return () => current++; // inner function () forms a closure over `current`
};

/** 
 * const counter = createCounter(10)
 * console.log(counter()); // 10
 * console.log(counter()); // 11
 * console.log(counter()); // 12
 */
