import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("/api/get-all-suggestions")
      .then((res) => res.json())
      .then((data) => setSuggestions(data));
  }, []);

  return (
    <div className="home-container">
      <aside className="left-column">
        <div className="company-card">
          <h2>My Company</h2>
          <p>Feedback Board</p>
        </div>
        <div className="category-filter">
          <button>All</button>
          <button>UI</button>
          <button>UX</button>
          <button>Enhancement</button>
          <button>Bug</button>
          <button>Feature</button>
        </div>
      </aside>

      <main className="right-column">
        <div className="suggestions-header">
          <p>{suggestions.length} Suggestions</p>
          <button className="feedback-btn">+ Add Feedback</button>
        </div>
        <div className="suggestions-list">
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="suggestion-card">
              <h3>{suggestion.title}</h3>
              <p>{suggestion.detail}</p>
              <span className="category-name">{suggestion.category}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
