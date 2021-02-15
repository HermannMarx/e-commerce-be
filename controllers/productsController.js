const pool = require("../dbconfig");

module.exports = {
  getAll: async (req, res) => {
    res.send("Hello All Products");
  },
  getById: async (req, res) => {
    const { id } = req.params;
    res.send("Hello Product by Id");
  },
};
