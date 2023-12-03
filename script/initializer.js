/**
 * @module contains draw field function
 */


/**
 * Create header and todocardlist that contains all todo cards
 * @param {Document} root 
 * @returns {document} todoCardList document object that contains all to-do cards
 */

export const createToDoListObject = (root) => {

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const todoCardList = document.createElement('div');
    todoCardList.classList.add('todo-card');

    const todoCardHeader = document.createElement('div');
    todoCardHeader.classList.add('todo-card__header');

    const todoCardHeaderUpper = document.createElement('div');
    todoCardHeaderUpper.classList.add('todo-card__header__upper');

    const todoCardHeaderLower = document.createElement('div');
    todoCardHeaderLower.classList.add('todo-card__header__lower');

    let text = document.createTextNode('Delete All');
    const deleteAllTasksButton = document.createElement('button');
    deleteAllTasksButton.classList.add('btn', 'todo-card__header--button__deleteall');
    deleteAllTasksButton.append(text);

    text = document.createTextNode('Delete Last');
    const deleteLastTaskButton = document.createElement('button');
    deleteLastTaskButton.classList.add('btn', 'todo-card__header--button__deletelast');
    deleteLastTaskButton.append(text);

    const inputTask = document.createElement('input');
    inputTask.classList.add('inpField', 'todo-card__header--input__task');
    inputTask.setAttribute('type', 'text');
    inputTask.setAttribute('placeholder', 'Enter todo...');
    inputTask.setAttribute('required', 'true');

    text = document.createTextNode('Add');
    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('btn', 'todo-card__header--button__add');
    addTaskButton.append(text);


    text = document.createTextNode('All: ' + 0);
    const infoFieldAll = document.createElement('p');
    infoFieldAll.classList.add('todo-card__header--info__all');
    infoFieldAll.append(text);

    text = document.createTextNode('Completed: ' + 0);
    const infoFieldComp = document.createElement('p');
    infoFieldComp.classList.add('todo-card__header--info__comp');
    infoFieldComp.append(text);

    text = document.createTextNode('Show All');
    const showAllTasksButton = document.createElement('button');
    showAllTasksButton.classList.add('btn', 'todo-card__header--button__showall');
    showAllTasksButton.append(text);

    text = document.createTextNode('Show Completed');
    const showCompTaskButton = document.createElement('button');
    showCompTaskButton.classList.add('btn', 'todo-card__header--button__showcomp');
    showCompTaskButton.append(text);


    const inputSearchTask = document.createElement('input');
    inputSearchTask.classList.add('inpField', 'todo-card__header--input__search');
    inputSearchTask.setAttribute('type', 'text');
    inputSearchTask.setAttribute('placeholder', 'Search...');

    todoCardHeaderUpper.append(deleteAllTasksButton, deleteLastTaskButton, inputTask, addTaskButton);
    todoCardHeaderLower.append(infoFieldAll, infoFieldComp, showAllTasksButton, showCompTaskButton, inputSearchTask);

    todoCardHeader.append(todoCardHeaderUpper, todoCardHeaderLower);

    todoCardList.append(todoCardHeader);
    wrapper.append(todoCardList);
    root.append(wrapper);
    return todoCardList;
}