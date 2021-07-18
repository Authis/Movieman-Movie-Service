const mongoose = require("mongoose");

const Schema = mongoose.Schema;
 
const Movies = new Schema({
  movieName : String,
  launguage: String,
  synopsis: String,
  censCert:String,
  genre:String,
  actor:String,
  actress:String,
  director:String,
  prodname: String,
  distname: String,
  relDate: String,
  currPocName: String,
  currPocNo:String,
  insertedDate: Date,
  updatedDate: Date,
  recordCreated: String,
  recordUpdated:String

});

const movies = mongoose.model("Movies", Movies);

module.exports = movies;
