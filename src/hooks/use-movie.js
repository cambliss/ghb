import { useState, useEffect } from 'react';
import axios from 'axios';

const useMovieFatching = () => {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.BASE_URL}movie/all-movie`)
  //     .then((res) => {
  //       setMovies(res.data);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);
  useEffect(() => {
    axios
      // .get(`${process.env.BASE_URL}movie/all-movie`)
      .get(`https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies`)


      .then((res) => {
        setMovies(res.data);
        console.log(res.data);
        
      })
      .catch((e) => console.log(e));
  }, []);
  return movies;
};

export default useMovieFatching;
