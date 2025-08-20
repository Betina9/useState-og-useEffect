import { useEffect, useState } from "react";

function CatFacts() {
const [facts, setFacts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
  fetch("https://catfact.ninja/fact")
  .then((response) => response.json())
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
})
.then((data) => {
  setFacts(data.fact);
  setLoading(false);
})
.catch((error) => {   
  setError(error);
  setLoading(false);
});
}, []);

if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <div>
    <h1>{facts}</h1>
  </div>
);
}

export default CatFacts;
