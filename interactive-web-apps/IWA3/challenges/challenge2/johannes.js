// johannes.js
/** private and public used instead of const
 *  export should be used
 * 
 * use J in each variable
 */

export const firstnameJ = "Johannes"
export const surnameJ = "Potgieter"
export const  roleJ = "Intern"

const display= firstnameJ + " " + surnameJ + " (" + roleJ + ")"
document.querySelector('#johannes').innerText = display
 