/**
 * Set styles on elements
 * @param Object styles
 */
export const css = function(styles) {
    this.elements.forEach((el) => {
        for(let property in styles)
        {
            el.style[property] = styles[property];
        }
    });
};