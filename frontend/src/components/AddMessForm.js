import React, { useState } from "react";
import api from "../services/api";

function AddMessForm({ onMessAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/messes", {
        name: formData.name,
        location: formData.location,
        price: parseInt(formData.price),
      });

      setMessage("Mess Added Successfully");
      setError("");

      setFormData({
        name: "",
        location: "",
        price: "",
      });

      if (onMessAdded) {
        onMessAdded(response.data);
      }
    } catch (err) {
      setError("Failed to Add Mess");
      setMessage("");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Add New Mess
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-3 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Mess Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold md:col-span-3"
        >
          Add Mess
        </button>
      </form>

      {message && (
        <p className="text-green-600 mt-4 font-medium">
          {message}
        </p>
      )}

      {error && (
        <p className="text-red-600 mt-4 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}

export default AddMessForm;