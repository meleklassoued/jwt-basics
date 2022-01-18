const login = async (req, res) => {
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
