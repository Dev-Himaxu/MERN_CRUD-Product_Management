const express = require("express");
const {
  getAllProd,
  getProdBy_Id,
  addProd,
  updateProdBy_Id,
  deleteProdBy_Id,
} = require("../controller/prodController");

const router = express.Router();

router.get("/products", getAllProd);
router.get("/product/:id", getProdBy_Id);
router.post("/add", addProd);
router.put("/update/:id", updateProdBy_Id);
router.delete("/delete/:id", deleteProdBy_Id);

module.exports = router;
