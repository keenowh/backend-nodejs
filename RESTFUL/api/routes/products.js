const express = require("express");

const Redis = require("ioredis");
const router = express.Router();
const pool = require("../../db");

const redis = new Redis(6379);
function cache(req, res, next) {
  redis.get("todos", (err, result) => {
    if (err) throw err;
    if (result !== null) {
      console.log("I'm using cache");
      res.status(200).send(JSON.parse(result));
    } else {
      next();
    }
  });
}

router.get("/", cache, async (req, res, next) => {
  try {
    // Get Data
    const data = await pool.query("SELECT * FROM product");

    // Refactor data for response
    // const response = {
    //
    // }
    const resp = data.rows;
    redis.set("todos", JSON.stringify(resp));
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, price } = req.body;
    const newProduct = await pool.query(
      "INSERT INTO product (name, price) VALUES ($1, $2) RETURNING *",
      [name, price]
    );
    redis.del("todos");
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/:productId", async (req, res, next) => {
  try {
    const id = req.params.productId;
    const respo = await pool.query("SELECT * FROM product WHERE id = $1", [id]);
    res.status(200).json(respo.rows);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.put("/:productId", async (req, res, next) => {
  try {
    const id = req.params.productId;
    const { name, price } = req.body;
    console.log(name);
    console.log(id);
    console.log(price);
    const response = await pool.query(
      "UPDATE product SET name = $1, price = $2 WHERE id = $3 RETURNING *",
      [name, price, id]
    );

    res.status(200).json(response.rows);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

// router.delete("/:productId", (req, res, next) => {
//   Product.remove({ _id: id })
//     .exec()
//     .then((result) => {
//       res.status(200).json(result);
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err });
//     });
// });

module.exports = router;
