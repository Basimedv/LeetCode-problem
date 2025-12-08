/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
let store
let flag=false
    return function(...args){
  
if(flag===true){
    return undefined
}

store=fn(...args)
flag=true
return store

    }
  
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
