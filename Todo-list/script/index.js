/**
 * @module module contains main logic loops and listeners
 */

import * as Initializer from './initializer.js'
import * as CardsController from './cardsController.js';
import * as CardFactory from './card.js'
import * as LocalStorageController from './localStorageController.js'

let cardDataStorage = [];

let counters = {
    countOfTasks: 0,
    countOfCompleted: 0,
    id: 0,
}

const root = document.querySelector('#root');
const todoCardList = Initializer.createToDoListObject(root);

cardDataStorage = LocalStorageController.popCardsFromLocalStorage(cardDataStorage);
counters = CardsController.showCardsFromDataStorage(todoCardList, counters, cardDataStorage);
CardsController.updateFieldData(root, counters);


/**
 * Listener of clicks on the page
 */

root.addEventListener('click', (event) => {
    const element = event.target;
    // ADD CURRENT TO-DO
    if (element.classList.contains('todo-card__header--button__add')) {
        const todoString = element.parentNode.querySelector('.inpField').value.trim();
        if(todoString) {
            const todoObject = new CardFactory.CardConstuctor(counters.id, new Date(), todoString, false);
            counters = CardsController.addTodoElement(todoCardList, todoObject, counters);
            cardDataStorage = LocalStorageController.addToLocalStorage(cardDataStorage, todoObject);
            counters.id++;
        } else {
            alert('You need to enter something in to-do card');
        }
    }
    // CLOSE CURRENT TO-DO
    if (element.classList.contains('todo-card__element--side__close')) {
        const todoCard = element.closest('.todo-card__element');
        cardDataStorage = LocalStorageController.removeFromLocalStorage(cardDataStorage, todoCard.getAttribute('id'));
        console.log(todoCard);
        CardsController.closeTodoElement(todoCard, todoCard.querySelector('.todo-card__element--button__comp'), counters);
    }
    // COMPLETE OR INCOMPLETE CURRENT TO-DO
    if (element.classList.contains('todo-card__element--button__comp')) {
        const todoCard = element.closest('.todo-card__element');
        counters = CardsController.compTodoElement(element, todoCard, counters);
        cardDataStorage = LocalStorageController.updateLocalStorageObject(todoCard, cardDataStorage);
    }
    // DELETE ALL TO-DO'S
    if (element.classList.contains('todo-card__header--button__deleteall')) {
        counters = CardsController.deleteAllTodoElements(root, counters);
        cardDataStorage = LocalStorageController.clearLocalStorage(cardDataStorage);
    }
    // DELETE LAST TO-DO
    if (element.classList.contains('todo-card__header--button__deletelast')) {
        counters = CardsController.deleteLastTodoElement(root, counters);
        cardDataStorage = LocalStorageController.removeFromLocalStorage(cardDataStorage, cardDataStorage[cardDataStorage.length - 1].id);
    }
    // SHOW ALL TO-DO'S
    if (element.classList.contains('todo-card__header--button__showall')) {
        CardsController.showAllTodoElements(root);
    }
    // SHOW COMPLETED TO-DO'S
    if (element.classList.contains('todo-card__header--button__showcomp')) {
        CardsController.showCompTodoElements(root);
    }
    CardsController.updateFieldData(root, counters);
});



root.addEventListener('input', (event) => {
    const element = event.target;
    if (element.classList.contains('todo-card__header--input__search')) {
        const search = element.value.toLowerCase().trim();
        searchCard(root, search);
    }
});

root.querySelector('.todo-card__header--input__task').addEventListener('keypress', (event) => {
    const textInput = root.querySelector('.todo-card__header--input__task');
    if (event.code === 'Enter') {
        const todoString = textInput.value.trim();
        if(todoString) {
            const todoObject = new CardFactory.CardConstuctor(counters.id, new Date(), todoString, false);
            counters = CardsController.addTodoElement(todoCardList, todoObject, counters);
            cardDataStorage = LocalStorageController.addToLocalStorage(cardDataStorage, todoObject);
            counters.id++;
        } else {
            alert('You need to enter something in to-do card');
        }
    }
    CardsController.updateFieldData(root, counters);
})