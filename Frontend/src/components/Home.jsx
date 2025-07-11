import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/product/products`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleDelete = async (p_Id) => {
    try {
      await axios.delete(`http://localhost:4000/product/delete/${p_Id}`);
      setProduct((prevProd) => prevProd.filter((prod) => prod._id !== p_Id));
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleUpdate = (p_Id) => {
    navigate(`/update/${p_Id}`);
  };
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col">
            <div className="card">
              <h1 className="text-center">Product List</h1>
              <div className="card-body">
                <div className="table-responsive  ">
                  <table className="table table-light table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Date</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product && product.length > 0 ? (
                        product.map((prod, index) => (
                          <tr className="" key={prod._id}>
                            <td>{index + 1}</td>
                            <td>{prod.name}</td>
                            <td>{prod.description}</td>
                            <td>{prod.price}</td>
                            <td>{prod.quantity}</td>
                            <td>{prod.createdAt.slice(0, 10)}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-danger me-2"
                                onClick={() => handleDelete(prod._id)}
                              >
                                Delete
                              </button>
                              <button
                                type="button"
                                className="btn btn-warning"
                                onClick={() => handleUpdate(prod._id)}
                              >
                                Update
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="text-center">
                            No products available
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
