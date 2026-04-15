import { useState } from "react";
import { Link } from "react-router-dom";
import iconArrowLeft from "../assets/icons/icon-arrow-left.svg";
import iconNewFeedback from "../assets/icons/icon-new-feedback.svg";
import "./AddFeedback.css";

function AddFeedback() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("UI");
  const [detail, setDetail] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title || !detail) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const res = await fetch("/api/add-one-suggestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, category, detail }),
      });

      if (!res.ok) {
        throw new Error("Failed to add suggestion");
      }
    } catch (err) {
      setError("Something went wrong");
      console.error(err);
    }
  }

  return (
    <div className="add-feedback-page">
      <Link to="/" className="go-back-link">
        <img src={iconArrowLeft} alt="arrow left" /> Go Back
      </Link>

      <div className="add-feedback-card">
        <img src={iconNewFeedback} alt="new feedback" className="icon-circle" />
        <h1>Create New Feedback</h1>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>Feedback Title</label>
          <p>Add a short, descriptive headline</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Category</label>
          <p>Choose a category for your feedback</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="Enhancement">Enhancement</option>
            <option value="Bug">Bug</option>
            <option value="Feature">Feature</option>
          </select>

          <label>Feedback Detail</label>
          <p>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <textarea
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />

          <div className="button-row">
            <Link to="/">
              <button type="button">Cancel</button>
            </Link>
            <button type="submit">Add Feedback</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddFeedback;
