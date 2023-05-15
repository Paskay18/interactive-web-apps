import { BOOKS_PER_PAGE, authors, genres,  books } from "./data.js"; 

//data to be used

/**
 * This is an object literal that contains all the references to all the HTML elements 
 * that are referenced throught the app either through initialization or while its running through event listeners.
 * 
 */

const html = {
    header:{
        search: document.querySelector('[data-header-search]'),
        settings: document.querySelector('[data-header-settings'),
    },

    list:{
        active: document.querySelector('[data-list-active]'),
        items: document.querySelector('[data-list-items]'),
        message: document.querySelector('[data-list-message]'),
        button: document.querySelector('[data-list-button]'),
        blur: document.querySelector('[data-list-blur]'),
        image: document.querySelector('[data-list-image]'),
        title: document.querySelector('[data-list-title]'),
        subtitle: document.querySelector('[data-list-subtitle]'),
        description: document.querySelector('[data-list-description]'),
        close: document.querySelector('[data-list-close]'),
        
},

  search: {
    overlay: document.querySelector('[data-search-overlay]'),
    form: document.querySelector('[data-search-form]'),
    title: document.querySelector('[data-search-title]'),
    genres: document.querySelector('[data-search-genres]'),
    authors: document.querySelector('[data-search-authors]'),
    cancel: document.querySelector('[data-search-cancel]'),
  },

  settings:{
    overlay: document.querySelector('[data-settings-overlay]'),
    form: document.querySelector('[data-settings-form]'),
    theme:document.querySelector('[data-settings-theme]'),
    cancel:document.querySelector('[data-settings-cancel]'),

  },
}


const matches = books       //added const 
const page = 1;             //added const 



//to show the list of book items, opens and closes that list 
const extracted = matches.slice(0, 36)
const fragment = document.createDocumentFragment();


for (const { author, image, title, id, description, published } of extracted) {
    const element = document.createElement("button");
    element.classList = "preview";
    element.dataset.id = id;
    element.dataset.title = title;
    element.dataset.description = description;
    element.dataset.image = image;
    element.dataset.subtitle = `${authors[author]} (${new Date(
        published
    ).getFullYear()})`;
    element.setAttribute("data-preview", id);

    element.innerHTML = /* html */ `
            <div><img
                class ="preview__image"
                src="${image}"
            /></div>
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `;
    

    fragment.appendChild(element);
}

html.list.items.appendChild(fragment); 


const handleListClose = ()=> {
    html.list.active.close()
}

//when the app is active

const  handleListClick = (event)=> {
    const pathArray = Array.from(event.path || event.composedPath());
    let active;
  
    for (const node of pathArray) {
      if (active) break;
      const previewId = node?.dataset?.preview;
  
      for (const singleBook of books) {
        if (singleBook.id === previewId) {
          active = singleBook;
          break;
        }
      }
    }
  
    if (!active) return
    html.list.active.open = true
    html.list.blur.style.backgroundImage = `url(${active.image})` //fix this part to show image too
    html.list.title.textContent = active.title
    html.list.subtitle.textContent = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
    html.list.description.textContent = active.description
  }
  html.list.items.addEventListener("click", handleListClick)
  html.list.close.addEventListener("click", handleListClose)



  //to show more book options

const handleShowMoreButton2 = () => {

    let start = 36;
    let end = 79;
    const extracted = matches.slice(36, 79);

    const fragment = document.createDocumentFragment();
    
    
    for (const {
        author,
        image,
        title,
        id,
        description,
        published,
    } of extracted) {
        const element = document.createElement("button");
        element.classList.add("preview");
        element.dataset.id = id;
        element.dataset.title = title;
        element.dataset.description = description;
        element.dataset.image = image;
        element.dataset.subtitle = `${authors[author]} (${new Date(
            published
        ).getFullYear()})`;
        element.setAttribute("data-preview", id);

        element.innerHTML = /* html */ `
        <div>
          <img class="preview__image" src="${image}" />
        </div>
        <div class="preview__info">
          <h3 class="preview__title">${title}</h3>
          <div class="preview__author">${authors[author]}</div>
        </div>
      `;

        fragment.appendChild(element);
    }

    html.list.items.appendChild(fragment);
    
html.list.button.textContent ="Show More";

   
}
html.list.button.addEventListener("click", handleShowMoreButton2)



/*
*This is an eventListener which decreases the books as you press the Show More
*/


const handleShowMoreButton=() => { 

const remaining = matches.length - matches[36];
const fragment = document.createDocumentFragment();

if (remaining > 0) {
      bookEnd += 18; // display 18 books at a time
      const extracted = matches.slice(36, 79);
      
      for (const { author, image, title, id, description, published } of extracted) {
        // create and append elements as before
      }
      html.list.button.appendChild(fragment);
     
      html.list.button.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining">"Show more ${remaining > 18 ? remaining - 18 : 0}"</span>
      `;
      html.list.button.disabled = !(remaining - 18 > 0);
    } else {
      html.list.button.disabled = true;
    };

html.list.button.textContent ="Show More";
html.list.button.focus();

  }
  html.list.button.addEventListener("click", handleShowMoreButton)


//search button
  
/**
 * This creates genre and author options once the search button is pressed and it is created in the HTML
 */

//genre options
const createGenreOptionsHtml = () =>{
  const fragment = document.createDocumentFragment()
  
  const option = document.createElement('option')     //added const 
  option.value = "any"                              //replaced element with option
  option.innerText = "All Genres"
  html.search.genres.appendChild(option)        
 

for (const [id, names] of Object.entries(genres)) {
 const element = document.createElement('option')     //added const 
  element.value = id                              //replaced element with option
  element.innerText = names
  fragment.appendChild(element)                             
}
return fragment
}
//author options
const createAuthorOptionsHtml = () =>{
  const fragment = document.createDocumentFragment()


  const option = document.createElement('option')    //added const
  option.value = "any"                               //changed element to option
  option.innerText = "All Authors"                          //added .innertext
  html.search.authors.appendChild(option)


  for ( const [id, names]of Object.entries(genres)) {
  const element = document.createElement('option')    //added const
  element.value = id                              //changed element to option
  element.innerText = names                           //added .innertext
  fragment.appendChild(element)
}
 return fragment
}


/**
* When the app starts and the search button is clicked, this will allow the search button to be in focus
* immediately allowing the viewer to serach the different type of books
*/

html.search.title.focus()

//need to add other things as well that will have focus when search button is clicked

html.search.genres.appendChild(createGenreOptionsHtml())               //genres options
html.search.authors.appendChild(createAuthorOptionsHtml())             //author options



/**
* This is where event listeners are added to make the specific functionalities work
*/


//search button to function

//for the search button to open and close
const handleSearchToggle = (event) => {
html.search.overlay.toggleAttribute("open");
};
html.header.search.addEventListener('click', handleSearchToggle)
html.search.cancel.addEventListener('click', handleSearchToggle)



//filter search
const FilterSearchButton = document.querySelector('[data-search-form]')


//Event listner to submit and search
FilterSearchButton.addEventListener('submit', (event)=>{
    event.preventDefault();

   html.list.items.style.display = 'none'             //to hide the booklist

   html.list.message.innerHTML = ''    //clearing message

   
    const formData = new FormData(event.target)            //getting the data that we are going to filter search
    const titleFilter = formData.get('title');
    const genreFilter = formData.get('genre');
    const authorFilter = formData.get('author');

  
  
    const filteredSearchedBooks = [];                           //Array that will store the filter serached books 

    for (let i = 0; i < matches.length; i++) {
    const book = matches[i];
    
    // if genre and author are not selected, filter by title only
   if (genreFilter === 'any' && authorFilter === 'any') {
   if (book.title.toLowerCase().includes(titleFilter.toLowerCase())){
    filteredSearchedBooks.push(book);
   }
  }
  // if genre is not selected, filter by title and author
  if (genreFilter === 'any') {
    if (book.title.toLowerCase().includes(titleFilter.toLowerCase()) && book.author === authorFilter){
     filteredSearchedBooks.push(matches);
    }
   }
   // if title is not entered, filter by author and genre
   if (titleFilter === '') {
    if (book.author === authorFilter && book.genres.includes(genreFilter)){
     filteredSearchedBooks.push(matches);
    }
   }
   // if neither title nor author are selected, filter by genre only
   if (titleFilter === '' && authorFilter === 'any' ) {
    if (book.genres.includes(genreFilter)){
     filteredSearchedBooks.push(matches);
    }
   }
   // display message if no books match filters
   if (filteredSearchedBooks.length > 0){
    document.querySelector('[data-list-message]').innerText = ''
    document.querySelector('[data-list-button]').disabled = true
    document.querySelector('[data-list-message]').style.marginTop = '-125px';
   } else{
    document.querySelector('[data-list-message]').innerText = 'No results found. Your filters might be too narrow.'
    document.querySelector('[data-list-button]').disabled = true
   }
}
// display filtered books
document.querySelector('[class="list__message"]').style.display = 'block'
// create fragment to hold filtered books

const fragmentFilteredBooks = document.createDocumentFragment()
    for (const {author ,image, title, id , description, published} of filteredSearchedBooks) {
        const preview = document.createElement('button')
        preview.className = 'preview'
        preview.dataset.id = id
        preview.dataset.title = title
        preview.dataset.image = image
        preview.dataset.subtitle = `${authors[author]} (${(new Date(published)).getFullYear()})`
        preview.dataset.description = description
        preview.dataset.genre = genres
        
        // create preview button with book information
        preview.innerHTML= /*html*/`
        <div>
        <image class='preview__image' src="${image}" alt="book pic"}/>
        </div>
        <div class='preview__info'>
        <dt class='preview__title'>${title}<dt>
        <dt class='preview__author'> By ${authors[author]}</dt>
        </div>`
// append preview button to fragment
        fragmentFilteredBooks.appendChild(preview)
        }
// add filtered books to message area
    const booklist2 = document.querySelector('[class="list__message"]')
    booklist2.append(fragmentFilteredBooks)
        document.querySelector('[data-search-form]').reset()
        document.querySelector("[data-search-overlay]").close()
    })


//Theme button 

//opening and closing the button
const handleThemeToggle = (event) => {
  html.settings.overlay.toggleAttribute("open");
  };
  html.header.settings.addEventListener('click', handleThemeToggle)
  html.settings.cancel.addEventListener('click', handleThemeToggle)
  


 const day = {
  dark: '10, 10, 20',
  light: '255, 255, 255',
}

const night ={
  dark: '255, 255, 255',
  light: '10, 10, 20',
}


  function changeTheme(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);
    const theme = result.theme;
    document.documentElement.setAttribute('data-settings-theme', theme);
  }
  
  const forms = document.querySelectorAll('.theme-form');
  forms.forEach(form => {
    form.addEventListener('submit', changeTheme);
  });








