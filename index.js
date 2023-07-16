const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());

var corsOptions = {
	origin: ["*"],
	optionsSuccessStatus: 200,
};

app.use(cors());
app.use(cors(corsOptions));

dotenv.config();

const prescriptions = require("./Apis/prescriptions/routes");

app.use("/prescriptions", prescriptions);
app.get("/", (req, res) => {
	res.send("hello world......!!!");
});

const startServer = () => {
	try {
		app.listen(process.env.PORT || 3001, () => {
			console.log(
				`server started on http://localhost:${process.env.PORT || 3001}`
			);
		});
	} catch (err) {
		console.log("error while creating server");
	}
};

startServer();
