/**
 * Attribute controls
 * @param String attribute
 * @param String|Function val
 * @returns String
 */
export const attr = function(attribute, val) {
    if(typeof val === "string") {
        this.elements[0].setAttribute(attribute, val);
    }

    return this.elements[0].getAttribute(attribute);
};


/**
 * Add class
 * @param String class_name
 */
export const addClass = function(class_name) {
    this.elements.forEach((el) => el.classList.add(class_name));
};


/**
 * Remove class
 * @param String class_name
 */
export const removeClass = function(class_name) {
    this.elements.forEach((el) => el.classList.remove(class_name));
};


/**
 * Toggle class
 * @param String class_name
 */
export const toggleClass = function(class_name) {
    this.elements.forEach((el) => el.classList.toggle(class_name));
};


/**
 * Check class
 * @param String class_name
 */
export const hasClass = function(class_name) {
    return this.elements[0].classList.contains(class_name);
};