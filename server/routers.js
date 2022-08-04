const express = require("express");
const router = express.Router();
const mainController = require("./mainController");


///constroller for main pages
router.get("/", mainController.home);

/*router.get('', (req, res)=>{
    res.render('home',{title:"User Management System"})
})*/



module.exports = router;
