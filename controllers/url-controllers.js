const model = require("../model/data");
//penanganan hasil routing

const redirectHome = (req, res) => {
	model.redirectHome(req, res);
};

const home = (req, res, next) => {
	model.home(req, res, next)
};
const userAll = (req, res, next) => {
	model.userAll(req, res, next);
};
const getById = (req, res, next) => {
	model.getById(req, res, next);
};
const register = (req, res, next) => {
	model.register(req, res, next)
}
const postById = (req, res, next) => {
	model.postById(req, res, next);
};
const updateById = (req, res, next) => {
	model.updateById(req, res, next)
}
const putById = (req, res, next) => {
	model.putById(req, res, next);
};
const deleteById = (req, res, next) => {
	model.deleteById(req, res, next);
};

module.exports = {
	redirectHome,
	home,
	userAll,
	register,
	getById,
	postById,
	updateById,
	putById,
	deleteById,
};
