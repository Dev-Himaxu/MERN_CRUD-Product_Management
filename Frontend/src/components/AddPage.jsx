import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AddPage = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setProduct({
        ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...product,
      createdAt: new Date().toISOString(),
    };
    try {
      axios.post(`http://localhost:4000/product/add`, data);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col">
            <div className="card">
              <h1 className="text-center">Add Product</h1>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="formId1"
                      value={product.name}
                      onChange={handleChange}
                      placeholder=""
                    />
                    <label htmlFor="formId1">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      id="formId1"
                      value={product.description}
                      onChange={handleChange}
                      placeholder=""
                    />
                    <label htmlFor="formId1">Description</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="price"
                      id="formId1"
                      value={product.price}
                      onChange={handleChange}
                      placeholder=""
                    />
                    <label htmlFor="formId1">Price</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="quantity"
                      value={product.quantity}
                      onChange={handleChange}
                      id="formId1"
                      placeholder=""
                    />
                    <label htmlFor="formId1">Quantity</label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPage;
