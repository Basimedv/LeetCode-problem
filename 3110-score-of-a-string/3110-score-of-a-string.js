/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
  let start=0
  for(let i=0;i<s.length-1;i++){
    let a=s.charCodeAt(i)
    let b=s.charCodeAt(i+1)
    let diff;
    if(a>b){
        diff=a-b

    }else{
        diff=b-a
    }
    start+=diff
  }
  return start;
};