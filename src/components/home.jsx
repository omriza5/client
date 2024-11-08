import { useState } from "react";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5001/api";

const Home = () => {
  const [poke, setPoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handlePokeClick = async () => {
    console.log("P_IP: ", process.env.REACT_APP_API_URL);
    try {
      setPoke(null);
      setLoading(true);
      setError("");
      const { data: pokemon } = await axios.get(`${apiUrl}/pokemon`);

      setPoke(pokemon);
    } catch (e) {
      setLoading(false);
      setError("Something went wrong!");
    }

    setLoading(false);
  };
  return (
    <section className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h2
        className="text-center text-primary mt-4 mb-4"
        style={{
          fontSize: "1.75rem",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        Discover Your Next Pokémon Adventure - Press the Button Below!
      </h2>
      <button
        onClick={handlePokeClick}
        className="btn btn-primary btn-lg rounded-pill shadow-sm mt-3"
      >
        Poke 😉
      </button>
      {loading && (
        <section className="mt-5">
          <div className="spinner-border" role="status"></div>
        </section>
      )}
      {error && <p className="text-danger fw-bold fs-5">{error}</p>}
      {poke && (
        <article className="d-flex justify-content-between w-100 mt-5">
          <section className="w-50" style={{ height: "300px" }}>
            <img
              src={poke.image || ""}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              alt={poke.name}
            />
          </section>
          <section
            className="w-50 d-flex flex-column justify-content-center align-items-start p-4"
            style={{
              borderRadius: "15px",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
              backgroundColor: "#ffffff",
              border: "1px solid #e0e0e0",
              padding: "2rem",
              color: "#333",
            }}
          >
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "0.5rem",
              }}
            >
              {poke.name}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#666",
                marginBottom: "1rem",
                fontStyle: "italic",
              }}
            >
              Pokémon ID: <span style={{ fontWeight: "500" }}>{poke.id}</span>
            </p>
            <div style={{ width: "100%" }}>
              <h5
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#555",
                  marginBottom: "0.5rem",
                }}
              >
                Abilities
              </h5>
              <div
                className="d-flex flex-wrap"
                style={{ gap: "0.5rem", paddingTop: "0.5rem" }}
              >
                {poke.abilities.map((ability, index) => (
                  <span
                    key={index}
                    style={{
                      fontSize: "0.9rem",
                      backgroundColor: "#e0f7fa",
                      color: "#00796b",
                      padding: "0.3rem 0.6rem",
                      borderRadius: "12px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                  >
                    {ability}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </article>
      )}
    </section>
  );
};

export default Home;
