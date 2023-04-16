/** private and public used instead of const
 *  export should be used
 * 
 * use A in different variables
 */


export const firstnameA = "Alex"
export const surnameA = "Naidoo"
export const roleA = "Head of Marketing"

const display= firstnameA + " " + surnameA + " (" + roleA + ")"
document.querySelector('#alex').innerText = display