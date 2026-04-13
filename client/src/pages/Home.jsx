import { useState, useEffect } from "react";

function Home() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("/api/get-all-suggestions")
      .then((res) => res.json())
      .then((data) => setSuggestions(data));
  }, []);

  return (
    <div>
      <h1>Derp</h1>
      {suggestions.map((suggestion) => (
        <div key={suggestion.id}>
          <h2>{suggestion.title}</h2>
          <p>{suggestion.detail}</p>
          <p>{suggestion.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
