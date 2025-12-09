/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cach={}


    return function(...args) {
        let key=JSON.stringify(args)
        if(cach[key]!==undefined){
            return cach[key]
        }
        let result=fn(...args)
        cach[key]=result
        return result
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */