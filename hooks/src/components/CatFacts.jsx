import { use } from "react";

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
    fetch("https://catfact.ninja/fact")
    .then((data) => {
        setFacts(data.data);
        setLoading(false);
        .catch((err) => {
            setError(err.message);
            setLoading(false);
            if (loading) return <p>Loading cat facts</p>;
            if (error) return <p>Error: {error}</p>
            <ul>
                {facts.map((fact, index) => (
                    <li key={index}>{fact.fact}</li>
                ))}
            </ul>
        });
    })


  return (
    <button onClick={onClick}>
      Click for cat facts!
      <img
        src="./images/litenpote.png"
        alt="A cookie"
        style={{ width: "20px", height: "20px" }}
      />
    </button>
  );
}

export default CatFacts;
