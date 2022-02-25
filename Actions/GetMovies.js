import axios from "axios";

const BaseURL = "https://api.themoviedb.org/3/movie/";
// popular?api_key=570607981511b286676e5140a2187373
export const GetAllMovies = async () => {
  let Movies = [];
  await axios
    .get(`${BaseURL}popular?api_key=570607981511b286676e5140a2187373`)
    .then((response) => {
      Movies = response.data.results;
      console.log(response.data.results[0].id);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("00");
  return {
    type: "GET_ALL_MOVIES",
    payload: Movies
  };
};

export const GetMovieDetails = async (id) => {
  let Movie = {};
  await axios
    .get(`${BaseURL}${id}?api_key=570607981511b286676e5140a2187373`)
    .then((response) => {
      Movie = response.data;
      console.log(Movie)
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("00");

  return {
    type: "GET_MOVIE_DETAILS",
    payload: Movie
  };
};

export const ClearDetails = ()=>{
    return {
        type:'CLEAR_DETAILS'
    }
}