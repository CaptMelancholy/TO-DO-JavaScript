import * as Styles from './stylesChanger.js'

/**
 * @module contains card element and constuctor of data
 */


/**
 * Data constructor function
 * @param {Number} id 
 * @param {Date} date 
 * @param {String} text 
 * @param {Boolean} isChecked 
 */

export function CardConstuctor(id, date, text, isChecked) {
    this.id = id;
    this.date = date;
    this.text = text;
    this.isChecked = isChecked;
}

/**
 * Function of adding to-do card on field
 * @param {Object} todoObject 
 * @returns to-do card
 */

export const createCard = (todoObject, ...flag) => {
    const todoElement = document.createElement('div');
    todoElement.setAttribute('id', todoObject.id);
    todoElement.classList.add('todo-card__element');

    const buttonCompTask = document.createElement('input');
    buttonCompTask.classList.add('btn', 'todo-card__element--button__comp');
    buttonCompTask.setAttribute('id', 'comp_' + todoObject.id)
    buttonCompTask.setAttribute('type', 'checkbox');
    buttonCompTask.setAttribute('name', 'comp');
    buttonCompTask.hidden = true;

    let text = document.createTextNode('✔');
    const labelCompTask = document.createElement('label');
    labelCompTask.classList.add('btn', 'todo-card__element--button__label');
    labelCompTask.setAttribute('for', 'comp_' + todoObject.id);
    labelCompTask.append(text);

    

    text = document.createTextNode(todoObject.text);
    const todoInfoField = document.createElement('div');
    todoInfoField.classList.add('todo-card__element--info');
    todoInfoField.append(text);

    const sideTaskInfo = document.createElement('div');
    sideTaskInfo.classList.add('todo-card__element--side');


    text = document.createTextNode('✖');
    const closeTaskButton = document.createElement('button');
    closeTaskButton.classList.add('btn', 'todo-card__element--side__close');
    closeTaskButton.append(text);

    text = document.createTextNode('Date');
    const dateTask = document.createElement('div');
    dateTask.classList.add('todo-card__element--side__date');
    if(flag[0]) {
        dateTask.append(new Date(Date.parse(todoObject.date)).toLocaleString());
    } else {
        dateTask.append(todoObject.date.toLocaleString());
    }
    sideTaskInfo.append(closeTaskButton, dateTask);

    if (todoObject.isChecked) {
        buttonCompTask.checked = true;
        Styles.disableElement(todoElement, todoInfoField);
    }

    todoElement.append(buttonCompTask, labelCompTask, todoInfoField, sideTaskInfo);
    return todoElement;
}

