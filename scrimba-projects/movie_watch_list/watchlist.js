import { getMovieHtml } from "./utils.js"

const movieReturnEl = document.getElementById('movie-return-watchlist')


const removeMovie = (event) => {
    const moviesArray = JSON.parse(localStorage.getItem('movies'))
    const newMovieArray = moviesArray.filter(movie => 
        movie.title !== event.target.dataset.title)
    localStorage.setItem('movies', JSON.stringify(newMovieArray))
    render()
}

const render = () => {
    const moviesArray = JSON.parse(localStorage.getItem('movies'))
    
    if (!moviesArray) {
        movieReturnEl.innerHTML = `
            <h3 class="watchlist-msg-placeholder">
                Your watchlist is looking a little empty...
            </h3>
            <a href="index.html" class="watchlist-add-movies">Let's add some movies!</a>
        `
    } else {
        movieReturnEl.innerHTML = moviesArray.map(movie => {
            return getMovieHtml(movie, false)
        }).join('')

        const removeBtn = document.getElementsByClassName('watchlist-remove')
        
        Array.from(removeBtn).forEach(btn => {
            btn.addEventListener('click', removeMovie)
        })

 
    }

}

render()