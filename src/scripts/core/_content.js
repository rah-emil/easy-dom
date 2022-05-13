/**
 * Insert content on element
 * @param String|Object content
 */
export const html = function(content) {
    this.elements.forEach((el) => el.innerHTML = content);
};


/**
 * Append content on element
 * @param String|Object content
 * @param String where
 */
export const append = function(content, where = 'beforeEnd') {
    this.elements.forEach((el) => el.insertAdjacentHTML(where, content));
};


/**
 * Search element
 * @param String desired
 * @returns Array - found elements
 */
export const find = function(desired) {
    let results = [];

    this.elements.forEach((el) => {
        results.push(...el.querySelectorAll(desired));
    });

    return results;
};