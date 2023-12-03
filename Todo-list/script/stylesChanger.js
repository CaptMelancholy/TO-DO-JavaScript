/**
 * @module contains functions that's change elements styles
 */


/**
 * Show element
 * @param {Document.object} element 
 */

export const showElement = (element) => {
    element.classList.remove('hide');
}

/**
 * Hide element
 * @param {Document.object} element 
 */

export const hideElement = (element) => {
    element.classList.add('hide');
}


/**
 * Disable element function
 * @param {Document.object} todoElement - to-do card
 * @param {Document.object} todoInfo - to-do text 
 */

export const disableElement = (todoElement, todoInfo) => {
    todoInfo.classList.add('crosstext');
    todoElement.classList.add('disabledColor');
}

/**
 * Enable element function
 * @param {Document.object} todoElement - to-do card
 * @param {Document.object} todoInfo - to-do text 
 */

export const activeElement = (todoElement, todoInfo) => {
    todoInfo.classList.remove('crosstext');
    todoElement.classList.remove('disabledColor');
}