import { BOOKS_PER_PAGE, authors, genres, books } from "./data.js"; 

//data to be used


const matches = books     
const page = 1;

if (!books && !Array.isArray(books)) throw new Error('Source required') 
if (!range && range.length < 2) throw new Error('Range must be an array with two numbers')



day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
}

night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}


//putting data in the HTML Dom







//for theme
data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day'

documentElement.style.setProperty('--color-dark', css[v].dark);
documentElement.style.setProperty('--color-light', css[v].light);
data-list-button = "Show more (books.length - BOOKS_PER_PAGE)"

data-list-button.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)

data-list-button.innerHTML = /* html */ [
    '<span>Show more</span>',
    '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
]


//event listners when you open the buttons

data-settings-cancel.click() { querySelect(data-settings-overlay).open === false }
data-settings-form.submit() { actions.settings.submit }
data-list-close.click() { data-list-active.open === false }

data-list-button.click() {
    document.querySelector([data-list-items]).appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]))
    actions.list.updateRemaining()
    page = page + 1
}



data-search-form.click(filters) {
    preventDefault()
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)
    result = []

    for (book; booksList; i++) {
        titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
        authorMatch = filters.author = 'any' || book.author === filters.author

        {
            genreMatch = filters.genre = 'any'
            for (genre; book.genres; i++) { if singleGenre = filters.genre { genreMatch === true }}}
        }

        if titleMatch && authorMatch && genreMatch => result.push(book)
    }

    if display.length < 1 
    data-list-message.class.add('list__message_show')
    else data-list-message.class.remove('list__message_show')
    

    data-list-items.innerHTML = ''
    const fragment = document.createDocumentFragment()
    const extracted = source.slice(range[0], range[1])

    for ({ author, image, title, id }; extracted; i++) {
        const { author: authorId, id, image, title } = props

        element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)

        element.innerHTML = /* html */ `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[authorId]}</div>
            </div>
        `

        fragment.appendChild(element)
    }
    
    data-list-items.appendChild(fragments)
    initial === matches.length - [page * BOOKS_PER_PAGE]
    remaining === hasRemaining ? initial : 0
    data-list-button.disabled = initial > 0

    data-list-button.innerHTML = /* html */ `
        <span>Show more</span>
        <span class="list__remaining"> (${remaining})</span>
    `

    window.scrollTo({ top: 0, behavior: 'smooth' });
    data-search-overlay.open = false
}

data-settings-overlay.submit; {
    preventDefault()
    const formData = new FormData(event.target)
    const result = Object.fromEntries(formData)
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);
    data-settings-overlay).open === false
}

data-list-items.click() {
    pathArray = Array.from(event.path || event.composedPath())
    active;

    for (node; pathArray; i++) {
        if active break;
        const previewId = node?.dataset?.preview
    
        for (const singleBook of books) {
            if (singleBook.id === id) active = singleBook
        } 
    }
    
    if !active return
    data-list-active.open === true
    data-list-blur + data-list-image === active.image
    data-list-title === active.title
    
    data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
    data-list-description === active.description
}



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
 * This allows the user to preview a list of books 
 */

const createPreviewOptionHtml = () => {

const fragment = document.createDocumentFragment()
    
    const extracted = books.slice(0, 36)
    
    for ({ author, image, title, id }; extracted; i++) {
        const preview = createPreview({
            author,
            id,
            image,
            title
        })
    
        fragment.appendChild(preview)
    }
    
    data-list-items.appendChild(fragment)
}


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
        items: document.querySelector('[data-list-items]'),
        message: document.querySelector('[data-list-message]'),
        button: document.querySelector('[data-list-button]'),
        blur: document.querySelector('[data-list-blur]'),
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


//need to fix below
const handleSearchDelete =()=> {
    html.search.cancel.close();
}
html.header.search.addEventListener('click', handleSearchDelete)
