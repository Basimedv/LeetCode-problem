var TimeLimitedCache = function () {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration
 * @return {boolean}
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const now = Date.now();
    const isValid =
        this.cache.has(key) && this.cache.get(key).expire > now;

    this.cache.set(key, {
        value: value,
        expire: now + duration
    });

    return isValid;
};

/** 
 * @param {number} key
 * @return {number}
 */
TimeLimitedCache.prototype.get = function (key) {
    const now = Date.now();

    if (!this.cache.has(key)) return -1;

    const item = this.cache.get(key);
    if (item.expire <= now) {
        this.cache.delete(key);
        return -1;
    }

    return item.value;
};

/** 
 * @return {number}
 */
TimeLimitedCache.prototype.count = function () {
    const now = Date.now();
    let count = 0;

    for (let [key, item] of this.cache) {
        if (item.expire > now) {
            count++;
        } else {
            this.cache.delete(key);
        }
    }

    return count;
};
