import { useState } from "react";
import Details from "./Details";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Recipe from "./Recipe";

function RecipeComponent({
  image,
  label,
  cuisine,
  ingredients,
  link,
  id,
  calories,
  cautions,
}) {
  const [show, setShow] = useState(false);
  console.log(id);

  const showDetails = () => {
    setShow(!show);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
    console.log(id);
  };

  return (
    <div className="card">
      <img src={image} width="300px" height="300px" alt="recipe-pic" />
      <h2>{label}</h2>
      <h3>{cuisine} cuisine</h3>
      <button className="btn-toggle" onClick={() => showDetails()}>
        Ingredients
      </button>
      {show && <Details ingredients={ingredients} />}

      <button className="btn-link" onClick={() => openInNewTab(link)}>
        Full Recipe
      </button>

      <Router>
        <Link to={"/recipe/" + id}>More Info</Link>
        <Routes>
          <Route
            path="/recipe/:id"
            element={
              <Recipe
                label={label}
                cuisine={cuisine}
                calories={calories}
                cautions={cautions}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default RecipeComponent;
