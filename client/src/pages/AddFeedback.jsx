import { useState } from "react";
import { Link } from "react-router-dom";
import iconArrowLeft from "../assets/icons/icon-arrow-left.svg";

function AddFeedback() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("UI");
  const [detail, setDetail] = useState("");

  return <div className="add-feedback-page"></div>;
}

export default AddFeedback;
