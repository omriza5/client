import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_APP_API_URL || "http://localhost:5001/api";

const History = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${apiUrl}/pokemons`)
      .then((res) => {
        setPokemons(res.data);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        console.error("Error fetching pokemons:", err);
        setLoading(false);
        setError("Something went wrong");
      });
  }, []);

  return (
    <section className="container mt-5">
      <section className="d-flex justify-content-center">
        {loading && (
          <section className="my-5">
            <div className="spinner-border" role="status"></div>
          </section>
        )}
        {error && <p className="text-danger fw-bold fs-5">{error}</p>}
      </section>
      <div
        className="row g-4 overflow-auto pb-3"
        style={{ maxHeight: "500px", overflowY: "auto" }}
      >
        {pokemons &&
          pokemons.map((pokemon) => (
            <div key={pokemon.id} className="col-md-4 col-sm-6">
              <div
                className="card border-0"
                style={{
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)", // Increased shadow effect
                }}
              >
                <img
                  src={pokemon.image}
                  className="card-img-top"
                  alt={pokemon.name}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-dark mb-0">{pokemon.name}</h5>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default History;
