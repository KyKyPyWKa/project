let numbeOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?",0);
let personalMovieBD = {
    count: numbeOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

let lastFilm = prompt("Один из последних просмотренных фильмов?");
personalMovieBD.movies[lastFilm] = +prompt("На сколько оцените его?",0);

let secondFilm = prompt("Один из последних просмотренных фильмов?");
personalMovieBD.movies[secondFilm] = +prompt("На сколько оцените его?",0);

console.log(personalMovieBD);f