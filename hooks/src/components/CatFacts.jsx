import { useEffect, useState } from "react";
import "../styles/CatFacts.css";

function CatFacts() {
  const [facts, setFacts] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* Henter en katte fakta*/
  const fetchFact = (signal) => {
    setLoading(true);
    setError(null);

    return fetch("https://catfact.ninja/fact", { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})`);
        }
        return response.json();
      })
      .then((data) => setFacts(data.fact))
      .catch((err) => {
        if (err.name !== "AbortError") setError(err);
      })
      .finally(() => setLoading(false));
  };

  /* Funksjon for å hente kattefakta fra API-et ved mount */
  useEffect(() => {
    const controller = new AbortController();
    fetchFact(controller.signal);
    return () => controller.abort();
  }, []);

  return (
    <div>
      {loading && <p>Laster…</p>}
      {error && <p>Feil: {error.message}</p>}
      {!loading && !error && <h1>{facts}</h1>}

      <button className="catButton" onClick={() => fetchFact()}>
        Get a new cat fact 🐱
      </button>
    </div>
  );
}

export default CatFacts;
