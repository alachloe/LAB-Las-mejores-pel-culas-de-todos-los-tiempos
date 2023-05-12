// Iteración 1: Todos los directores

const getAllDirectors = (movies) => {
    return movies.map((movie) => movie.director);
  };

  // Iteración 2: Steven Spielberg. ¿El mejor?

  const howManyMovies = (array) => {
    return array.filter((movie) => {
      const isDirectedByStevenSpielberg = movie.director === 'Steven Spielberg';
      const isDramaMovie = movie.genre.includes('Drama');
      return isDirectedByStevenSpielberg && isDramaMovie;
    }).length;
  };
  
 // Iteración 3: Todas las puntuaciones son promedio

  const roundNumbers = (number, digits) =>
    Math.round(number * 10 ** digits) / 10 ** digits;
  
  const scoresAverage = (array) => {
    if (array.length === 0) {
      return 0;
    }
    const scores = array
      .map((movie) => movie.score)
      .map((score) => {
        if (typeof score === 'number') {
          return score;
        } else {
          return 0;
        }
      });
    const sumOfAllScores = scores.reduce(
      (accumulator,score) => accumulator + score,
      0 );
    const averageScore = sumOfAllScores / scores.length;
  
    return roundNumbers(averageScore, 2);
  };
  
//   Iteración 4: Películas de drama

  const dramaMoviesScore = (array) => {
    const dramaMovies = array.filter((movie) => movie.genre.includes('Drama'));
    const averageDramaMovieScore = scoresAverage(dramaMovies);
    return averageDramaMovieScore;
  };
  
  // Iteracion 5: Ordenar por ano

  
  const orderByYear = (array) => {
    const sortedMovies = [...array];
    sortedMovies.sort((firstMovie, secondMovie) => {
      const firstMovieYearOfRelease = firstMovie.year;
      const secondMovieYearOfRelease = secondMovie.year;
  
      if (firstMovieYearOfRelease > secondMovieYearOfRelease) {
        return 1;
      } else if (firstMovieYearOfRelease < secondMovieYearOfRelease) {
        return -1;
      } else if (
        firstMovie.title.toLowerCase() > secondMovie.title.toLowerCase()
      ) {
        return 1;
      } else {
        return -1;
      }
    });
  
    return sortedMovies;
  };
  
  // Iteración 6: Orden alfabético
  
  const orderAlphabetically = (array) => {
    const sortedMovies = [...array];
    sortedMovies.sort((firstMovie, secondMovie) => {
      return firstMovie.title.localeCompare(secondMovie.title);
    });
    const movieTitles = sortedMovies.map((movie) => movie.title);
    return movieTitles.slice(0, 20);
  };