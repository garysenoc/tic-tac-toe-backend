const History = require("../models/History");

const createHistory = async (req, res) => {
    try {
      // Assuming History is your model and it's properly defined
      const body = req.body
      const newHistory = await History.create({...req.body});
      
      res.status(200).json({
        status: "success",
        data: {
          history: newHistory,
        },
      });
    } catch (err) {
      console.error("Error creating history:", err.message); // Logging only the error message
      res.status(500).json({
        status: "fail",
        message: "Failed to create history",
      });
    }
  };
  
const deleteHistory = async (req, res) => {
  try {
    const ifExist = await History.findById(req.params.id);

    console.log(ifExist);

    if (!ifExist) {
      res.status(501).json({
        status: "fail",
        message: "Post not exist",
      });
    }

    await History.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: `Successfully deleted`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

const updateHistory = async (req, res) => {
    try {
      const status = req.body.status;
      const historyData = await History.findById(req.params.id);
      const update = {}
      const filter = { _id: req.params.id };
      if(status === 'draw'){
        update.draw = historyData.draw + 1; 

      }else if (status === 'xWins'){
        update.xWins = historyData.xWins + 1; 

      }else if (status === 'oWins'){
        update.oWins = historyData.oWins + 1; 
      }
      console.log(update)
      const doc = await History.findOneAndUpdate(filter, update, {
        new: true
        });
  
   
      if (!doc) {
        return res.status(404).json({
          status: "fail",
          message: "History not found",
        });
      }
  
      res.status(200).json({
        status: "success",
        data: {
          doc,
        },
      });
    } catch (err) {
      console.error("Error updating history:", err.message);
      res.status(500).json({
        status: "fail",
        message: "Failed to update history",
      });
    }
  };
  

const getHistory = async (req, res) => {
  try {
    const history = await History.findById(req.params.id);
    
    res.status(200).json({
      status: "success",
      data: {
        history,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};
const getAllHistory = async (req, res) => {
    try {
      // Assuming History is your model and it's properly defined
      const history = await History.find().sort({ dateCreated: -1 });
  
      res.status(200).json({
        status: "success",
        length: history.length,
        data: {
            history,
        },
      });
    } catch (err) {
      console.error("Error fetching history:", err.message); // Logging only the error message
      res.status(500).json({
        status: "fail",
        message: "Failed to fetch history",
      });
    }
  };
  

module.exports = {
  createHistory,
  getAllHistory,
  getHistory,
  updateHistory,
  deleteHistory
};

