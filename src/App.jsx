import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
