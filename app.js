require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const sauceRoutes = require("./routes/sauce");

const app = express();

// on connecte la bdd 
mongoose
	.connect(process.env.APP_MONGODBURL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connexion à MongoDB réussie !");
	})
	.catch(() => {
		console.log("Connexion à MongoDB échouée !");
	});

// on parametre les headers pour eviter les erreurs cors
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS"
	);
	next();
});

app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);

module.exports = app;
