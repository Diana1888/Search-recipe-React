import { useParams } from "react-router-dom";

function Recipe({ label, cuisine, calories, cautions }) {
  const { id } = useParams();
  console.log();
  return (
    <div>
      <h2>Recipe component+ {label}</h2>
      <h3>{cuisine}</h3>
      <p>{calories.toFixed()} calories</p>
      <ul>
        {cautions.map((caution, index) => (
          <li key={index}>{caution}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;
