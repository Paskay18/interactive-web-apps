//Import all the data to be used from the necessary javascripts
import { TABLES, COLUMNS, state, createOrderData, updateDragging } from "./data.js";
import { createOrderHtml, html, updateDraggingHtml, moveToColumn } from "./view.js";


/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}

//To allow the order to be dragged into the different columns

let draggedItem;
const handleDragStart = (event) => {
    //stores a reference to the dragged item
   draggedItem = event.target;
};
const handleDragDrop = (event) =>{
    //moves the seleceted item to where its supposed to be dropped
 event.target.append(draggedItem)
};
const handleDragEnd = (event) => {
    //changes the background colour when item is dropped
    const backgroundColor = event.target.closest('section');
    backgroundColor.style.backgroundColor= "";
};

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver);
    htmlArea.addEventListener('dragstart', handleDragStart);
    htmlArea.addEventListener('dragend', handleDragEnd);
    htmlArea.addEventListener('drop', handleDragDrop);
};

//To make the help button open and close
const handleHelpToggle = (event) => {
    //to allow the ? to open 
    html.help.overlay.toggleAttribute("open");
};
html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

//to allow the Add button to function
const handleAddToggle = (event) => {
    //allows add button to open and close
    html.add.overlay.toggleAttribute("open");
};
html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)

const handleAddSubmit = (event) => {
 //allows orders to be placed and submitted
 event.preventDefault();

 const order={
    id: state.orders,
    title: html.add.title.value,
    table: html.add.table.value,
    created: new Date(),
};

const orderElement = createOrderHtml(order);
html.area.ordered.append(orderElement);
html.add.form.reset();
html.add.overlay.close();
};
html.add.form.addEventListener('submit', handleAddSubmit)


//to edit order
const handleEditToggle = (event) => {
        //opens and closes the edit option of order
        html.edit.overlay.toggleAttribute("open");
        };
    html.other.grid.addEventListener('click', handleEditToggle)
    html.edit.cancel.addEventListener('click', handleEditToggle)
    
const handleEditSubmit = (event) => {
    event.preventDefault();

    const { id, title, table, created, column}={
        id: state.orders,
        title: html.edit.title.value,
        table: html.edit.table.value,
        created: new Date(),
        column: html.edit.column.value,
     };

     const orderEdit = { id, title, table, created, column};
 
     //to get the index of the order
     let orderIndex = -1;   

for( let i=0; i<state.orders.length; i++){
    if (state.orders[i].id === id){
        orderIndex: i;
        break;
    };
};
 

//updates the data 
state.orders[orderIndex]= createOrderData(orderEdit);

 //newOrder that will be deleted
 const newOrderEdit= createOrderHtml(orderEdit);

 //order to be deleted
 const oldOrderEdit = document.querySelector(`[data-id="${id}"]`);

 //updating the order
 oldOrderEdit.replaceWith(newOrderEdit);
 

 //for new order to go to the correct column
 switch(column){
    case "ordered": html.area.ordered.append(newOrderEdit);
    break;

    case "preparing": html.area.preparing.append(newOrderEdit);

    break;
    case "serving": html.area.serving.append(newOrderEdit);
    break;
    default:
    break;
 }
html.edit.overlay.close();
 };
html.edit.form.addEventListener('submit', handleEditSubmit)


//To delete edited orders
const handleDelete = (event) => {
    //to delete the order 

    event.preventDefault();


    //orders that are allowed to be edited
    const { id, title, table, created, column}={
        id: state.orders,
        title: html.edit.title.value,
        table: html.edit.table.value,
        created: new Date(),
        column: html.edit.column.value,
     };
    
    const orderDelete = { id, title, table, created, column};


    //to get the index of the order

    for( let i=0; i<state.orders.length; i++){
        if (state.orders[i].id === id){
            orderId: [i];
            break;
        };
    
    };


    //newOrder that will be deleted
    const newOrderDelete= createOrderHtml(orderDelete);

    //order to be deleted
    const oldOrderDelete = document.querySelector(`[data-id="${id}"]`);

    //deleting the order
    oldOrderDelete.remove(newOrderDelete);
    html.edit.overlay.close();
    

};


html.edit.delete.addEventListener('click', handleDelete)







