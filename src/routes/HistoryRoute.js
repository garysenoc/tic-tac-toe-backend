const router = require("express").Router();
const {
    createHistory,
    getAllHistory,
    getHistory,
    updateHistory,
    deleteHistory
} = require("../controllers/HistoryController");


router.get("/", getAllHistory); // For getting all post
router.get("/get-history/:id", getHistory); // For getting all post of user
router.post("/create-history", createHistory); 
router.delete("/delete-history/:id", deleteHistory); // For deleting post
router.patch("/update-history/:id", updateHistory); // For updating post

module.exports = router;

