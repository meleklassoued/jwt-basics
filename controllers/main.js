const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  if (!username || !password) {
    throw new BadRequestError("Please provide email password");
  }
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const { username } = req.user;
  const luckyNumber = Math.floor(Math.random * 100);
  res.status(200).json({
    msg: `Hello ,${username} `,
    secret: `here is your authorized data your lucky number is ${luckyNumber} `,
  });
};
module.exports = {
  dashboard,
  login,
};
