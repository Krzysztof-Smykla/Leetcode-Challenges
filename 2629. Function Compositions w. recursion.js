/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  return function(x) {
    if (functions.length === 0) return x; // base case

    // Take the last function
    const last = functions[functions.length - 1];
    const rest = functions.slice(0, -1); // everything except last

    // Apply last, then recurse on the rest
    return compose(rest)(last(x));
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x]);
 * fn(4) // 9
 */
