import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from './components/FoodBox';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodId) => {
    const updatedFoods = foods.filter((food) => food.id !== foodId);
    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>
            <FoodBox food={food} onDelete={deleteFood} />
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
