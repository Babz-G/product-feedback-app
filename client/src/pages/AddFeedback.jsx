import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate to redirect form back to homepage after submission
import iconArrowLeft from "../assets/icons/icon-arrow-left.svg";
import iconNewFeedback from "../assets/icons/icon-new-feedback.svg";
import "./AddFeedback.css";

function AddFeedback() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("UI");
  const [detail, setDetail] = useState("");
  const [errors, setErrors] = useState({
    title: "",
    detail: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title || !detail) {
      setErrors({
        title: title ? "" : "Can't be empty",
        detail: detail ? "" : "Can't be empty",
      });
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

      alert("Thank you for your feedback! 🥳");
      navigate("/");
    } catch (err) {
      setErrors({ title: "Something went wrong", detail: "" });
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

        <form onSubmit={handleSubmit}>
          <label>Feedback Title</label>
          <p>Add a short, descriptive headline</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={errors.title ? "red-error" : ""}
          />
          {errors.title && <p className="error">{errors.title}</p>}

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
            className={errors.detail ? "red-error" : ""}
          />
          {errors.detail && <p className="error">{errors.detail}</p>}

          <div className="button-row">
            <Link to="/">
              <button type="button" className="cancel-btn">
                Cancel
              </button>
            </Link>
            <button type="submit" className="submit-btn">
              Add Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddFeedback;
