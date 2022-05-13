/**
 * Set listener and handler on elements
 * @param String event
 * @param Function handler
 * @param Object options
 */
export const on = function(event, handler, options) {
    this.elements.forEach((el) => {
        el.addEventListener(event, handler, options);
    });
};