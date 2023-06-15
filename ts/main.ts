// @ts-ignore: Ignoring issue with js-datepicker, lack of intellisense
const picker = datepicker("#due-date");
picker.setMin(new Date()); // Set to todays date

class ToDoItem {
    title:string;
    dueDate:Date;
    isCompleted:boolean;

    // constructor(desiredTitle:string) {
    //     this.title = desiredTitle;
    // }
}

// let item = new ToDoItem();
// item.title = "Testing";
// item.dueDate = new Date(2020, 6, 1);
// item.isCompleted = false;

window.onload = function() {
    let addItem = document.getElementById("add");
    addItem.onclick = main;
}

function main() {
    if(isValid()) {
        let item = getToDoItem();
        displayToDoItem(item);
    }
}


/**
 * Check form data is valid
 */
function isValid():boolean {
    return true;
}

/**
 * Get all input off form and wrap in a
 * ToDoItem object
 */
function getToDoItem():ToDoItem {
    let myItem = new ToDoItem();
    
    // Get title
    let titleInput = <HTMLInputElement>document.getElementById("title");
    myItem.title = titleInput.value;

    // Get due date
    let dueDateInput = <HTMLInputElement>document.getElementById("due-date");
    myItem.dueDate = new Date(dueDateInput.value);

    // Get is completed?
    let isCompleted = <HTMLInputElement>document.getElementById("is-complete");
    myItem.isCompleted = isCompleted.checked;

    return myItem;
}

/**
 * Display given ToDoItem on the web page
 */
function displayToDoItem(item:ToDoItem):void {

}

// Task: Allow user to mark a ToDoItem as completed
// Task: Store ToDoItems in web storage