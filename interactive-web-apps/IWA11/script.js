
// script.js

//main location of items and values

const root_1 = document.querySelector("[data-key=order1");
 root_1.dataset.biscuits;
 root_1.dataset.donuts;
 root_1.dataset.pancakes;
root_1.dataset.delivered;

const root_2 = document.querySelector("[data-key=order2]");
root_2.dataset.biscuits;
root_2.dataset.donuts;
root_2.dataset.pancakes;
root_2.dataset.delivered;

const root_3= document.querySelector("[data-key=order3]");
root_3.dataset.biscuits;
root_3.dataset.donuts;
root_3.dataset.pancakes;
root_3.dataset.delivered; 

//order 2 biscuits and their location
 
const orderOneBiscuits= document.querySelector('body> section:nth-child(3) > dl > div.biscuits > dd');
orderOneBiscuits.innerText=root_1.dataset.biscuits;

const orderOneDonuts= document.querySelector('body> section:nth-child(3) > dl > div.donuts>dd');
orderOneDonuts.innerText=root_1.dataset.donuts;

const orderOnePancakes= document.querySelector('body> section:nth-child(3) > dl > div.pancakes>dd');
orderOnePancakes.innerText=root_1.dataset.pancakes;

const orderOneStatus= document.querySelector('body> section:nth-child(3) > dl > div.status>dd');
orderOneStatus.innerText=root_1.dataset.delivered==='true'? 'Delivered': 'Not Yet';


//order 2 items and their locations 
const orderTwoBiscuits= document.querySelector('body> section:nth-child(4) > dl > div.biscuits > dd');
orderTwoBiscuits.innerText=root_2.dataset.biscuits;

const orderTwoDonuts= document.querySelector('body> section:nth-child(4) > dl > div.donuts>dd');
orderTwoDonuts.innerText=root_2.dataset.donuts;

const orderTwoPancakes= document.querySelector('body> section:nth-child(4) > dl > div.pancakes>dd');
orderTwoPancakes.innerText=root_2.dataset.pancakes;

const orderTwoStatus= document.querySelector('body> section:nth-child(4) > dl > div.status>dd');
orderTwoStatus.innerText=root_2.dataset.delivered==='true'? 'Delivered': 'Not Yet Delivered';

//order3 items and locations
const orderThreeBiscuits= document.querySelector('body> section:nth-child(5) > dl > div.biscuits > dd');
orderThreeBiscuits.innerText=root_3.dataset.biscuits;

const orderThreeDonuts= document.querySelector('body> section:nth-child(5) > dl > div.donuts>dd');
orderThreeDonuts.innerText=root_2.dataset.donuts;

const orderThreePancakes= document.querySelector('body> section:nth-child(5) > dl > div.pancakes>dd');
orderThreePancakes.innerText=root_3.dataset.pancakes;

const orderThreeStatus= document.querySelector('body> section:nth-child(5) > dl > div.status>dd');
orderThreeStatus.innerText=root_3.dataset.delivered==='false' ? 'Delivered': ' Delivered';





