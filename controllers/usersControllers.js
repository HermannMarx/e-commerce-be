const pool = require("../dbconfig");

module.exports = {
  getAll: async (req, res) => {
    try {
      const data = await pool.query("SELECT * FROM users");
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
  register: async (req, res) => {
    const { first_name, last_name, prime, email, passowrd } = req.body;
    try {
      const data = await pool.query(
        "INSERT INTO users (first_name, last_name, prime, email, password) VALUES ($1, $2, $3, $4, $5)",
        [first_name, last_name, prime, email, passowrd]
      );
      res.json({
        code: 200,
        operation: "success",
        description: "You've been registered",
        data: data.rows,
      });
    } catch (e) {
      console.error(Error(e));
      res.status(500).send("Something happened, Hermann");
    }
  },
};
