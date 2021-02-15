const pool = require("../dbconfig");

module.exports = {
  getAll: async (req, res) => {
    try {
      const data = await pool.query("SELECT * FROM products");
      res.json({
        code: 200,
        operation: "success",
        description: "Fetched all products",
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
      const data = await pool.query(
        "SELECT * FROM products WHERE product_id=$1",
        [id]
      );
      res.json({
        code: 200,
        operation: "success",
        description: `Fetched product Nr.${id}`,
        data: data.rows,
      });
    } catch (e) {
      console.error(Error(e));
      res.status(500).send("Something happened, Hermann");
    }
  },
};
