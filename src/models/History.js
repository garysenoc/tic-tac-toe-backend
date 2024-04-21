const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  xWins: {
    type: Number,
    default: 0,
  },
  oWins: {
    type: Number,
    default: 0,
  },
  draw: {
    type: Number,  // Changed type to Number
    default: 0,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  xPlayerName: {
    type: String,
    default: '',
    trim: true,
  },
  oPlayerName: {
    type: String,
    default: '',
    trim: true,
  },
});

const History = mongoose.model("History", historySchema);
module.exports = History;
