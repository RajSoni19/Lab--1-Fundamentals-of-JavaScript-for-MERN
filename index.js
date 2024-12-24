let movieCollection = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Godfather", genre: "Crime", rating: 9.2, releaseYear: 1972 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Pulp Fiction", genre: "Crime", rating: 8.9, releaseYear: 1994 },
    { title: "Forrest Gump", genre: "Drama", rating: 8.8, releaseYear: 1994 }
];

function addMovie(title, genre, rating, releaseYear) {
    const newMovie = { title, genre, rating, releaseYear };
    movieCollection.push(newMovie);
    console.log(`Added movie: ${title}`);
}

function listMoviesByGenre(genre) {
    const moviesInGenre = movieCollection.filter(movie => movie.genre === genre);
    console.log(`Movies in genre "${genre}":`);
    moviesInGenre.forEach(movie => {
        console.log(`- ${movie.title} (${movie.releaseYear})`);
    });
}

function findHighestRatedMovie() {
    const highestRated = movieCollection.reduce((prev, current) => {
        return (prev.rating > current.rating) ? prev : current;
    });
    console.log(`Highest rated movie: ${highestRated.title} with a rating of ${highestRated.rating}`);
}

function listAllMovieTitles() {
    const titles = movieCollection.map(movie => movie.title);
    console.log(`All movie titles: ${titles.join(', ')}`);
}

function findMoviesReleasedAfter(year) {
    const recentMovies = movieCollection.filter(movie => movie.releaseYear > year);
    console.log(`Movies released after ${year}:`);
    recentMovies.forEach(movie => {
        console.log(`- ${movie.title} (${movie.releaseYear})`);
    });
}

addMovie("The Matrix", "Sci-Fi", 8.7, 1999);
listMoviesByGenre("Crime");
findHighestRatedMovie();
listAllMovieTitles();
findMoviesReleasedAfter(2000);
