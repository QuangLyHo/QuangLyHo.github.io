import { baseUrl } from "./data.js"

const fetchMovies = async movieSearch => {
    const res = await fetch(baseUrl + `s=${movieSearch}`)
    const data = await res.json()
    
    return data
}
    
const returnData = async data => {
    const movieDetails = data.Search.map(async movie => {
        let movieData = await fetchMovieDetail(movie.imdbID)

        movieData = {
            title : movieData.Title,
            rating : movieData.imdbRating,
            genre : movieData.Genre,
            plot : movieData.Plot,
            poster : movieData.Poster,
            runtime : movieData.Runtime
        }

        return getMovieHtml(movieData, true) 
    })

    return await Promise.all(movieDetails)
}

const fetchMovieDetail = async movieId => {
    const res = await fetch(baseUrl + `i=${movieId}`)
    const data = await res.json()

    return data
}

const getMovieHtml = (data, fromApi) => {

    let {title, runtime, plot, genre, rating, poster} = data
    if (poster == 'N/A') {
        poster = '/images/star-poster.svg'
    }
    return `
        <div class="movie-card">
            <div class="movie-card-main">
                <div class="movie-card-top">
                    <h3 class="movie-card-title">${title}</h3>
                    <p class="rating">${rating}</p>
                </div>
                <div class="movie-card-summary">
                    <p class="runtime">${runtime}</p>
                    <p class="genre">${genre}</p>
                    <button id="watchlist-btn" 
                    class="btn ${fromApi ? 'watchlist-add' : 'watchlist-remove'}"
                    data-poster="${poster}"
                    data-genre="${genre}"
                    data-title="${title}"
                    data-plot="${plot}"
                    data-rating="${rating}"
                    data-runtime="${runtime}">
                        Watchlist
                    </button>
                </div>
                <div class="movie-card-plot">
                    <p>${plot}</p>
                </div>
            </div>
            <div class="movie-card-secondary">
                <img src=${poster}>
            </div>
        </div>
    `
}   



export { fetchMovies, returnData, getMovieHtml }