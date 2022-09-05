let numbeOfFilms;

function start() {
    numbeOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?",0);
    
    while(numbeOfFilms == "" || numbeOfFilms == null || isNaN(numbeOfFilms)) {
        numbeOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?",0);
    }
}

start();

let personalMovieDB = {
    count: numbeOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};



function personalMovie() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

personalMovie();

function personalFilmsLevel() {
    for (let i = 0; i < 2; i++) {

        let lastFilm = prompt("Один из последних просмотренных фильмов?");

        while (lastFilm == undefined || lastFilm == false || lastFilm.length >= 50) {
            lastFilm = prompt("Один из последних просмотренных фильмов?");
        }
        personalMovieDB.movies[lastFilm] = prompt("На сколько оцените его?",0); 

        }
}

function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 0; i <= 2; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
}

writeYourGenres();