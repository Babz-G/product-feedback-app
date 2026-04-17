import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import iconPlus from "../assets/icons/icon-plus.svg";
import iconArrowUp from "../assets/icons/icon-arrow-up.svg";
import iconArrowDown from "../assets/icons/icon-arrow-down.svg";
import illustrationEmpty from "../assets/suggestions/illustration-empty.svg";
import iconSuggestions from "../assets/suggestions/icon-suggestions.svg";

function Home() {
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("most-upvotes");

  const filteredSuggestions = (
    selectedCategory === "All"
      ? suggestions
      : suggestions.filter((s) => s.category === selectedCategory)
  ).sort((a, b) => {
    if (sortBy === "most-upvotes")
      return (b.upvote_count || 0) - (a.upvote_count || 0);
    if (sortBy === "least-upvotes")
      return (a.upvote_count || 0) - (b.upvote_count || 0);
    if (sortBy === "most-comments")
      return (b.comment_count || 0) - (a.comment_count || 0);
    if (sortBy === "least-comments")
      return (a.comment_count || 0) - (b.comment_count || 0);
    return 0;
  });

  useEffect(() => {
    fetch("/api/get-all-suggestions")
      .then((res) => res.json())
      .then((data) => setSuggestions(data));
  }, []);

  async function handleUpvote(id) {
    await fetch(`/api/upvote-suggestion/${id}`, { method: "POST" });
    const updated = await fetch("/api/get-all-suggestions").then((res) =>
      res.json()
    );
    setSuggestions(updated);
  }

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
          <p>
            <img src={iconSuggestions} alt="suggestions icon" />{" "}
            {filteredSuggestions.length} Suggestions
          </p>
          <div className="sort">
            <span>Sort by:</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="most-upvotes">Most Upvotes</option>
              <option value="least-upvotes">Least Upvotes</option>
              <option value="most-comments">Most Comments</option>
              <option value="least-comments">Least Comments</option>
            </select>
            <img src={iconArrowDown} alt="arrow down" className="arrow-down" />
          </div>
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
                <button
                  className="upvote-btn"
                  onClick={() => handleUpvote(suggestion.id)}
                >
                  <img src={iconArrowUp} alt="upvote" />
                  {suggestion.upvote_count}
                </button>
                <div className="card-content">
                  <h3>{suggestion.title}</h3>
                  <p>{suggestion.detail}</p>
                  <span className="category-name">{suggestion.category}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
