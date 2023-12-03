import * as Styles from './stylesChanger.js'
import { createCard } from './card.js';

/**
 * @module contains cards connected functions
 */


/**
 * Function that's update info about amount of all/comp tasks on field
 * @param {Document} root 
 * @param {Object} counter 
 */

export const updateFieldData = (root, counter) => {
    root.querySelector('.todo-card__header--info__all').textContent = 'All ' + counter.countOfTasks;
    root.querySelector('.todo-card__header--info__comp').textContent = 'Complited ' + counter.countOfCompleted;
}

/**
 * Function that's show all card
 * @param {Document} root 
 */

export const showAllTodoElements = (root) => {
    Array.from(root.querySelectorAll('.todo-card__element')).forEach((element) => {
        Styles.showElement(element);
    });
}

/**
 * Function that's show completed cards and hide else
 * @param {Document} root 
 */

export const showCompTodoElements = (root) => {
    Array.from(root.querySelectorAll('.todo-card__element')).forEach((element) => {
        element.querySelector('.todo-card__element--button__comp').checked ? Styles.showElement(element) : Styles.hideElement(element);
    });
}

/**
 * Searching cards on field
 * @param {Document} root 
 * @param {String} text 
 */

export const searchCard = (root, text) => {
    const dataInTodo = root.querySelectorAll('.todo-card__element--info');
    let showArray = Array.from(dataInTodo).filter((element) => element.textContent.toLowerCase().includes(text.toLowerCase()));
    let hiddenArray = Array.from(dataInTodo).filter((element) => !element.textContent.toLowerCase().includes(text.toLowerCase()));
    showArray.forEach((element) => Styles.showElement(element.parentNode));
    hiddenArray.forEach((element) => Styles.hideElement(element.parentNode));
}


/**
 * Creating new todoCardelement
 * @param {Document} todoCardList 
 * @param {Document} todoObject 
 * @param {Object} counter 
 * @returns counter
 */

export const addTodoElement = (todoCardList, todoObject, counter, ...flag) => {
    todoCardList.append(createCard(todoObject, flag));
    if (todoObject.isChecked) counter.countOfCompleted++;
    counter.countOfTasks++;
    return counter;
}

/**
 * Making close todoElement
 * @param {Document} element 
 * @param {Object} counter 
 * @returns 
 */

export const closeTodoElement = (todoCard, todoChecked, counter) => {
    if(todoChecked.checked) counter.countOfCompleted--;
    counter.countOfTasks--;
    todoCard.remove();
    return counter;
}

/**
 * Delete all to-do element from the list
 * @param {Document} root 
 * @param {Object} counter 
 * @returns counter
 */

export const deleteAllTodoElements = (root, counter) => {
    Array.from(root.querySelectorAll('.todo-card__element')).forEach((element) => element.remove());
    counter.countOfCompleted = 0;
    counter.countOfTasks = 0;
    return counter;
}

/**
 * Delete last to-do element from the list
 * @param {Document} root 
 * @param {Object} counter 
 * @returns counter
 */

export const deleteLastTodoElement = (root, counter) => {
    const removeElement = Array.from(root.querySelectorAll('.todo-card__element')).pop();
    if (removeElement.querySelector('.todo-card__element--button__comp').checked) {
        counter.countOfCompleted--;
    }
    counter.countOfTasks--;
    removeElement.remove();
    return counter;
}

/**
 * Function that's complete current to-do element
 * @param {Document} todoChecked - Checked or not button of to-do
 * @param {Document} todoCard - Current to-do card
 * @param {Object} counter 
 * @returns counter
 */

export const compTodoElement = (todoChecked, todoCard, counter) => {
    const currentTodoElementInfo = todoCard.querySelector('.todo-card__element--info');
    if (todoChecked.checked) {
        Styles.disableElement(todoCard, currentTodoElementInfo);
        counter.countOfCompleted++;
    } else {
        Styles.activeElement(todoCard, currentTodoElementInfo);
        counter.countOfCompleted--;
    }
    return counter;
}

/**
 * Takes information from local storage and shows on the screen
 * @param {Document} todoCardList To-Do card list 
 * @param {Object} counter 
 * @param {Array} cardDataStorage 
 * @returns 
 */

export const showCardsFromDataStorage = (todoCardList, counter, cardDataStorage) => {
    counter.id = cardDataStorage.length;
    console.log(cardDataStorage);
    const tempCardDataStorage = Array.from(cardDataStorage);
    console.log(tempCardDataStorage);
    cardDataStorage.forEach(element => {
        counter = addTodoElement(todoCardList, element, counter, true);
    });
    return counter;
}