const pool = require("../dbconfig");

module.exports = {
  getAll: async (req, res) => {
    res.send("Hello to all Users");
  },
  getById: async (req, res) => {
    const { id } = req.params;
    res.send("Hello to user by Id");
  },
};
