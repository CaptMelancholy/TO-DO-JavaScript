/**
 * @module contains logic of localStorage
 */




/**
 * Clears local storage
 */

export const clearLocalStorage = (cardDataStorage) => {
    localStorage.clear();
    cardDataStorage.length = 0;
    return cardDataStorage;
}

/**
 * Adding data in local storage
 * @param {Array} cardDataStorage - Local Storage of Cards 
 * @param {Object} todoObject - Current to-do object to add
 * @returns cardDataStorage - Local Storage of Cards 
 */

export const addToLocalStorage = (cardDataStorage, todoObject) => {
    localStorage.setItem(todoObject.id, JSON.stringify(todoObject));
    cardDataStorage.push(todoObject);
    return cardDataStorage;
}

/**
 * Remove data from local stroage
 * @param {Array} cardDataStorage - Local Storage of Cards 
 * @param {Number} id - Current to-do object id
 * @returns cardDataStorage - Local Storage of Cards 
 */

export const removeFromLocalStorage = (cardDataStorage, id) => {
    cardDataStorage = cardDataStorage.filter((element) => element.id != id);
    localStorage.removeItem(id);
    return cardDataStorage;
}

/**
 * Update status of todo-card in local storage
 * @param {Document} todoCard 
 * @param {Array} cardDataStorage - Local Storage of Cards 
 * @returns cardDataStorage - Local Storage of Cards 
 */

export const updateLocalStorageObject = (todoCard, cardDataStorage) => {
    const compInput = todoCard.querySelector('.todo-card__element--button__comp');
    const idToChange = todoCard.getAttribute('id');
    cardDataStorage.find((el) => el.id == idToChange).isChecked = compInput.checked;
    const todoObject = cardDataStorage.find((el) => el.id == idToChange);
    localStorage.setItem(todoObject.id, JSON.stringify(todoObject));
    return cardDataStorage;
}

/**
 * Returns all cards from local storage
 * @param {Array} cardDataStorage 
 * @returns 
 */

export const popCardsFromLocalStorage = (cardDataStorage) => {
    if (localStorage.length) {
        for (let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue;
            }
            cardDataStorage.push(JSON.parse(localStorage.getItem(key)));
        }
        cardDataStorage = cardDataStorage.reverse();
    }
    return cardDataStorage;
}