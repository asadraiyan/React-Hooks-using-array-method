import React, { useState, useEffect } from "react";
import "./AppData.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Update = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/users/${id}`)
      .then((res) => setFormData(res.data))
      .catch((err) => console.log(err.message));
  }, [id]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3030/users/${id}`, formData).then((res) => {
      alert("Data is updated succesfully");
      navigate("/");
    });
  };
  return (
    <>
      <div className="form-container">
        <form className="form-box" onSubmit={handleUpdate}>
          <div className="form-name">
            <label className="label-text">ID</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              disabled
              value={formData.id || ""}
            />
          </div>
          <div className="form-name">
            <label className="label-text">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name || ""}
            />
          </div>
          <div className="form-email">
            <label className="label-text">Email</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={formData.email || ""}
            />
          </div>
          <div className="form-phone">
            <label className="label-text">Phone</label>
            <input
              type="number"
              name="phone"
              onChange={handleChange}
              value={formData.phone || ""}
            />
          </div>
          <div className="submit-btn">
            <button>Update</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;
