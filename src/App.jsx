import { useState } from "react";
import "./App.css";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';


function App() {
  const [foods, setFoods] = useState([
    // Initial food items can be added here
  ]);

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm onAddFood={addFood} />
      <div className="food-list">
        {foods.map((food, index) => (
          <FoodBox key={index} food={food} onDelete={() => {}} />
        ))}
      </div>
    </div>
  );
}

export default App;
