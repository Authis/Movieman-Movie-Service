const express = require("express");
const router = express.Router();

const {
  insertMovieData,
  getMovies,
  editMovieData,
  deleteMovieData,
} = require("../service/movie-service");

router.post("/add", async (req, res) => {
  const data = await insertMovieData(req.body);
  if (data.success) {
    res.status(201).send(data);
  } else {
    res.status(500).send();
  }
});

router.get("/get/movies", async (req, res) => {
   
 
  const data = await getMovies();
  if (data.length > 0) {
    res.send(data);
  } else {
    res.status(404).send();
  }
});
 
router.post("/edit", async (req, res) => {
  const data = await editMovieData(req.body);
  if (data.success) {
    res.send(data);
  } else {
    res.status(500).send();
  }
});

router.delete("/delete", async (req, res) => {
  const { id } = req.query;
  const data = await deleteMovieData(id);
  if (data.success) {
    res.status(200).send(data);
  } else {
    res.status(500).send();
  }
});

module.exports = router;
