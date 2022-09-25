import { fetchMovies, returnData } from "./utils.js"

const form = document.getElementById('movie-search_form')
const formInput = form.elements[0]
const movieReturnEl = document.getElementById('movie-return')
let msg


form.addEventListener('submit', async e => {
    e.preventDefault()
    let input = formInput.value.replaceAll(' ', '+')
    msg = '...Loading'
    display(msg)
    const data = await fetchMovies(input)
    formInput.value = ''
    render(data)
})

const render = async (data) => {
    if (!data) {
        msg = 'Start exploring titles!'
        display(msg)
    } else if (data.Response == 'False') {
        msg = 'Title not found. Please try another title.'
        display(msg)
    } else {
        const moviePromise = await returnData(data)
        movieReturnEl.innerHTML = moviePromise.join('')

        const addBtn = document.getElementsByClassName('watchlist-add')
        console.log(addBtn)
        Array.from(addBtn).forEach(btn => {
            btn.addEventListener('click', addMovieToList)
        })
    }
}

function display(msg) {
    movieReturnEl.innerHTML = `
        <div class="start-exploring-placeholder" id="start-exploring-placeholder">
            <img src="./images/film.svg">
            <h3 id="display-msg">${msg}</h3>
        </div>`
}

const addMovieToList = (event) => {
    
    const movieDataSet = event.target.dataset
    const localStorageMovies = localStorage.getItem('movies')

    if (localStorageMovies) {
        const movieArray = JSON.parse(localStorage.getItem('movies'))
        movieArray.push(movieDataSet)
        localStorage.setItem('movies', JSON.stringify(movieArray))
    } else {
        localStorage.setItem('movies', JSON.stringify([movieDataSet]))
    }
}




render()