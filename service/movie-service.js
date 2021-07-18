const movie = require("../schema/movie");

const insertMovieData = async (movieData) => {
  movieData.insertedDate = new Date();
  movieData.updatedDate = new Date();
  const data = new movie(movieData);
  try {
    await data.save();
    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
    };
  }
};
 

const getMovies = async () => {
  try {
    const data = await movie.find(
      {},
      {
        id: true,
        movieName: true,
        launguage: true,
        censCert: true,
        genre: true,
        actor: true,
        actress: true,
        director: true,
        prodname: true,
        distname: true,
        relDate: true,
        currPocName: true,
        currPocNo: true
      }
    );
    return data;
  } catch (e) {
    return null;
  }
};

 
 

const editMovieData = async (movieData) => {
  const { id } = movieData;
  movieData.updatedDate = new Date();
  try {
    await movie.findByIdAndUpdate({ _id: id }, movieData);
    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
    };
  }
};

const deleteMovieData = async (id) => {
  try {
    await movie.findByIdAndDelete(id);
    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
    };
  }
};

module.exports = {
  insertMovieData,
  getMovies,
  editMovieData,
  deleteMovieData,
};
