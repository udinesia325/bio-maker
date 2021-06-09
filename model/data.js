const fs = require("fs");

const uniqid = require("uniqid");

const redirectHome = (req, res) => {
	res.redirect("/home");
};

const home = (req, res, next) => {
	res.render("home", {
		tittle: "home",
	});
};
const userAll = (req, res, next) => {
	let user = fs.readFileSync("./database/bio.json", "utf-8", (data) => {
		return data;
	});
	let parseUser = JSON.parse(user)
	res.render("userAll", {
		tittle: "userAll",
		user: parseUser
	});
};
const getById = (req, res) => {
	let data = fs.readFileSync("./database/bio.json", "utf-8", (data) => data)
	let parseData = JSON.parse(data)
	let user = parseData.filter(i => i.id == req.params.id)

	res.render("getById", {
		tittle: "getById",
		user: user[0],
	})
};
const register = (req, res) => {
	res.render("register", {
		tittle: "daftar"
	})
}

const postById = (req, res) => {
	const reqBody = req.body;

	const newData = dataBody(reqBody);

	try {
		postData(newData);
		res.redirect("/home/user");
	} catch (e) {
		console.log(e);
	}

};
const updateById = (req, res) => {
	let id = req.params.id
	let data = fs.readFileSync("./database/bio.json", "utf-8", data => data)
	let parseData = JSON.parse(data)


	let user = parseData.filter(i => i.id == id)
	res.render("update", {
		tittle: "update",
		data: user[0]
	})
}
const putById = (req, res) => {
	let id = req.body.id;
	let data = fs.readFileSync("./database/bio.json", "utf-8", data => data)
	let parseData = JSON.parse(data)
	let oldData = parseData.filter((i) => i.id != id);
	const reqBody = req.body;
	const newData = put(reqBody, id);
	try {
		oldData.push(newData);
		putData(oldData);
		res.redirect("/home/user");
	} catch (e) {
		res.redirect("/home/update")
	}

};
const deleteById = (req, res) => {
	let id = req.body.id;
	const db = fs.readFileSync("./database/bio.json", "utf-8", (data) => data);
	const data = JSON.parse(db)
	const afterDelete = data.filter((i) => i.id != id);
	fs.writeFileSync(
		"./database/bio.json",
		JSON.stringify(afterDelete),
		(err) => {
			if (err) res.send("error");
			res.redirect("/home/user");
		}
	);
	res.redirect("/home/user");

};
//putDataWithoutId
const put = (reqBody, id) => {
	return {
		id: id,
		namLeng: reqBody.namLeng,
		namaPanggilan: reqBody.namaPanggilan,
		umur: reqBody.umur,
		agama: reqBody.agama,
		kel: reqBody.kel,
		tanggalLahir: reqBody.tanggalLahir,
		alamat: reqBody.alamat,
	};
};

//dataBodyWithId
const dataBody = (reqBody) => {
	return {
		id: uniqid.time(),
		namLeng: reqBody.namLeng,
		namaPanggilan: reqBody.namaPanggilan,
		umur: reqBody.umur,
		agama: reqBody.agama,
		kel: reqBody.kel,
		tanggalLahir: reqBody.tanggalLahir,
		alamat: reqBody.alamat,
	};
};
//modify file system
const postData = (data) => {
	let db = fs.readFileSync("./database/bio.json", "utf-8", data => data)
	let parseDb = JSON.parse(db)
	parseDb.push(data);
	fs.writeFileSync("./database/bio.json", JSON.stringify(parseDb), (err) => {
		if (err) throw err;
	});
};
//put Data

const putData = (data) => {
	fs.writeFileSync("./database/bio.json", JSON.stringify(data), (err) => {
		if (err) throw err;
	});
};

module.exports = {
	redirectHome,
	home,
	userAll,
	register,
	getById,
	updateById,
	postById,
	putById,
	deleteById,
};
