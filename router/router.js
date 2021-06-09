const express = require("express")
const router = express.Router()
const urlcontroller = require("../controllers/url-controllers");


//get Data
router.get("/home", urlcontroller.home);
router.get("/home/about", (req, res) => {
	res.render("about", {
		tittle: "about"
	})
})
//app.get("/user", urlcontroller.userAll);
router.get("/home/user", urlcontroller.userAll)
router.get("/home/user/:id", urlcontroller.getById);
router.get("/home/daftar", urlcontroller.register)
router.get("/", urlcontroller.redirectHome);
router.post("/home/user", urlcontroller.postById);
//halaman update
router.get("/home/update/:id", urlcontroller.updateById)

//update
router.post("/home/update", urlcontroller.putById);


//hapus
router.post("/home/delete", urlcontroller.deleteById);

module.exports = router
