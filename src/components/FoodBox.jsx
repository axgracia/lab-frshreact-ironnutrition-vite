

function FoodBox({ food }) {
    const { name, calories, image, servings } = food;
  
    return (
      <div>
        <p>{name}</p>
        <img src={image} alt={name} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {servings * calories}</b> kcal
        </p>
        <button>Delete</button>
      </div>
    );
  }
  
  export default FoodBox;