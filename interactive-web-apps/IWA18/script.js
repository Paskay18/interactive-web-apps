//import information from data.js and view.js in order to use in app
import { TABLES, COLUMNS, createOrderData, state, updateDragging } from "./data.js";   //added this import
import { createOrderHtml, html, updateDraggingHtml, moveToColumn } from "./view.js";  //added .js

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


let dragged;
const handleDragStart = (event) => {
 dragged= event.target;   

};
const handleDragDrop = (j) => {
    a.target.append(dragged);
};
const handleDragEnd = (p) => {
    const background = p.target.closest('section');
    background.style.backgroundColor= " ";
}; 
for ( const htmlArea of Object.values(html.area)){
    htmlArea.addEventListener("dragover", handleDragOver);
    htmlArea.addEventListener("dragstart", handleDragStart);
    htmlArea.addEventListener( "drop", handleDragDrop);
    htmlArea.addEventListener("dragend", handleDragEnd);

};




// this is to show the user how the app
const handleHelpToggle = (event)=> {
    html.help.overlay.toggleAttribute("open");
};
html.help.cancel.addEventListener("click", handleHelpToggle)
html.other.help.addEventListener("click", handleHelpToggle)



//allows user to add order and cancel button on the order tab
const handleAddToggle = (event) => {
    html.add.overlay.toggleAttribute("open");
}
html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle) 


//allos user to make selection of order they made
const handleAddSubmit = (event) => {
    event.preventDefault();
    const order={
        id: state.orders,
        title: html.add.title.value,
        title: html.add.title.value,
        created: new Date(),
    };

    const orderElement = createOrderHtml(order);
    html.area.ordered.append(orderElement);
    html.add.form.reset();
    html.add.overlay.close();
}
html.add.form.addEventListener('submit', handleAddSubmit)


//to edit order tab
const handleEditToggle = (event) => {
    html.edit.overlay.toggleAttribute("open");
    
}
html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)

const handleEditSubmit = (event) => {
    event.preventDefault();
    const { id , title , table, created, column}={
        title: html.edit.title.value,
        table: html.edit.table.value,
        created: new Date(),
        Id: state.orders,
        column: html.edit.column.value,
    };
    const order = { id, title, table, created, column};

    let  orderId = -1 //checks order index if its found

    for(let j=0; j< state.orders.length; j++){
        if (state.orders[j].id === id){
            orderId = j;
            break
        };
    };

    //cancel button to enable you to cancel

    state.orders[orderId]= createOrderData(order);

    const newOrderMade = createOrderHtml(order);
    const oldOrder = document.querySelector(`[data-id="${id}"]`);
    order.replaceWith(newOrderMade);

    //adding the order to HTML column
   
    switch(column) {
        case "ordered":
            html.area.ordered.append(newOrderMade);

        break;
        case "preparing":
            html.area.preparing.append(newOrderMade);
        
        break;
        case "served":
            html.area.served.append(newOrderMade);
             break;
             default:
             break;
    };

     html.edit.overlay.close()

            
    };


               




html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)



for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}