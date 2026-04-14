import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import iconPlus from "../assets/icons/icon-plus.svg";
import illustrationEmpty from "../assets/suggestions/illustration-empty.svg";

function Home() {
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredSuggestions =
    selectedCategory === "All"
      ? suggestions
      : suggestions.filter((s) => s.category === selectedCategory);

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
          <button
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          <button
            className={selectedCategory === "UI" ? "active" : ""}
            onClick={() => setSelectedCategory("UI")}
          >
            UI
          </button>
          <button
            className={selectedCategory === "UX" ? "active" : ""}
            onClick={() => setSelectedCategory("UX")}
          >
            UX
          </button>
          <button
            className={selectedCategory === "Enhancement" ? "active" : ""}
            onClick={() => setSelectedCategory("Enhancement")}
          >
            Enhancement
          </button>
          <button
            className={selectedCategory === "Bug" ? "active" : ""}
            onClick={() => setSelectedCategory("Bug")}
          >
            Bug
          </button>
          <button
            className={selectedCategory === "Feature" ? "active" : ""}
            onClick={() => setSelectedCategory("Feature")}
          >
            Feature
          </button>
        </div>
      </aside>

      <main className="right-column">
        <div className="suggestions-header">
          <p>{filteredSuggestions.length} Suggestions</p>
          <Link to="/add-feedback">
            <button className="feedback-btn">
              <img src={iconPlus} alt="plus icon" /> Add Feedback
            </button>
          </Link>
        </div>
        <div className="suggestions-list">
          {filteredSuggestions.length === 0 ? (
            <div className="no-feedback">
              <img src={illustrationEmpty} alt="No feedback" />
              <h2>There is no feedback yet.</h2>
              <p>
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
              </p>
              <Link to="/add-feedback">
                <button className="feedback-btn">+ Add Feedback</button>
              </Link>
            </div>
          ) : (
            filteredSuggestions.map((suggestion) => (
              <div key={suggestion.id} className="suggestion-card">
                <h3>{suggestion.title}</h3>
                <p>{suggestion.detail}</p>
                <span className="category-name">{suggestion.category}</span>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
