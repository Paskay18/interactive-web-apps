// nwabisa.js

/** private and public used instead of const
 *  export should be used
 */

export const firstname = "Nwabisa"
export const surname = "Gabe"
export const role = "CEO"

const display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#nwabisa').innerText = display
 
