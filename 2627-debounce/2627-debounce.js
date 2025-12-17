/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer = null;

    return function(...args) {
        // Cancel the previous timer
        clearTimeout(timer);

        // Start a new timer
        timer = setTimeout(() => {
            fn(...args);
        }, t);
    };
};
