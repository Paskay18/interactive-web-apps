// scripts.js

//import didnt have curly brackets and the correct source path, wrong import used

import {company} from "./configuration.js"; 
import { year } from "./configuration.js";

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message


