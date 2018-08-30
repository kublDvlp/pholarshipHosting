var express = require('express');
var router = express.Router();

const multer = require("multer");
const path = require("path");

let storage = multer.diskStorage({
	destination: function(req, file, callback){
		callback(null, "upload/")
	},
	filename: function(req, file, callback){
		let extension = path.extname(file.originalname);
		let basename = path.basename(file.originalname, extension);
		callback(null, basename + " - " + Date.now() + extension)
		//callback(null, file.originalname + " - " + Date.now());
	}
})

let upload = multer({
	storage: storage
})


// view page
router.get('/show', function(req, res, next){
	res.render("board")
});


// file upload
router.post('/create', upload.single("imgFile"), function(req, res, next){
	let file = req.file

	let result = {
		originalName: file.originalname,
		size: file.size,
	}

	res.json(result);
});


module.exports = router;