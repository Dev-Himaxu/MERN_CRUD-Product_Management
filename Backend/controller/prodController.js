const Product = require("../model/model");

//Insert

const addProd = async (req, res) => {
  try {
    const newProd = await Product(req.body).save();
    res.status(200).json(newProd);
  } catch (error) {    
    res.status(500).json({ errorMessage: error.message });
  }
};

//Get all Product list

const getAllProd = async (req, res) => {
  try {
    const getProduct = await Product.find();
    if (!getProduct || getProduct.length === 0) {
      return res.status(400).json({ message: "No product found" });
    }
    res.status(200).json(getProduct);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

//Get Product by ID

const getProdBy_Id = async (req, res) => {
  try {
    const id = req.params.id;
    const prodExist = await Product.findById(id);
    if (!prodExist) {
      return res.status(400).json({ message: "No product found" });
    }
    res.status(200).json(prodExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
// Delete product by ID

const deleteProdBy_Id = async (req, res) => {
  try {
    const id = req.params.id;
    const prodExist = await Product.findById(id);
    if (!prodExist) {
      return res.status(400).json({ message: "No product found" });
    }
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product Deleted successfully" });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

//Update Product
const updateProdBy_Id = async (req, res) => {
  try {
    const id = req.params.id;
    const prodExist = await Product.findById(id);
    if (!prodExist) {
      return res.status(400).json({ message: "No product found" });
    }
    const update = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = {
  addProd,
  getProdBy_Id,
  deleteProdBy_Id,
  updateProdBy_Id,
  getAllProd,
};
