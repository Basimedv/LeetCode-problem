/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result = [];
    let temp = [];

    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);

        if (temp.length === size) {
            result.push(temp);
            temp = [];
        }
    }

    // push remaining elements
    if (temp.length > 0) {
        result.push(temp);
    }

    return result;
};

