const pool = require("../dbconfig");

module.exports = {
  getAll: async (req, res) => {
    res.send("Hello to all Users");
  },
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const data = await pool.query("SELECT * FROM users WHERE user_id=$1", [
        id,
      ]);
      res.json({
        code: 200,
        operation: "success",
        description: "Fetched all users",
        data: data.rows,
      });
    } catch (e) {
      console.error(Error(e));
      res.status(500).send("Something happened, Hermann");
    }
  },
};
