const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  if (!username || !password) {
    throw new CustomAPIError("Please provide email password ", 400);
  }
  res.send("fake Login/Register/Signup Route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random * 100);
  res.status(200).json({
    msg: `Hello ,john Doe `,
    secret: `here is your authorized data your lucky number is ${luckyNumber} `,
  });
};
module.exports = {
  dashboard,
  login,
};
