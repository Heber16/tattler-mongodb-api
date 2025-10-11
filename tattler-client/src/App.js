import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    address: "",
    cuisine: "",
    rating: ""
  });

  const API_URL = "http://localhost:3000/api/restaurants"; 

  // 🔹 Load restaurants
  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: { search, sort }
      });
      setRestaurants(response.data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, [search, sort]);

  // 🔹 Add restaurant
  const handleAddRestaurant = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, newRestaurant);
      setNewRestaurant({ name: "", address: "", cuisine: "", rating: "" });
      fetchRestaurants();
    } catch (error) {
      console.error("Error adding restaurant:", error);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🍽️ Tattler Restaurants</h1>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search restaurant..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "0.5rem", marginRight: "1rem" }}
      />

      {/* ⚙️ Sort */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        style={{ padding: "0.5rem" }}
      >
        <option value="">Sort by</option>
        <option value="ratingAsc">Rating (Low → High)</option>
        <option value="ratingDesc">Rating (High → Low)</option>
      </select>

      {/* ➕ Form */}
      <form onSubmit={handleAddRestaurant} style={{ marginTop: "2rem" }}>
        <input
          type="text"
          placeholder="Name"
          value={newRestaurant.name}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, name: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={newRestaurant.address}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, address: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Cuisine"
          value={newRestaurant.cuisine}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, cuisine: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Rating"
          step="0.1"
          value={newRestaurant.rating}
          onChange={(e) =>
            setNewRestaurant({ ...newRestaurant, rating: e.target.value })
          }
          required
        />
        <button type="submit">Add</button>
      </form>

      {/* 🧾 List */}
      <ul style={{ marginTop: "2rem" }}>
        {restaurants.map((r) => (
          <li key={r._id}>
            <strong>{r.name}</strong> — {r.cuisine} — ⭐ {r.rating} <br />
            <small>{r.address}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;