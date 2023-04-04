import { useEffect,useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = (props) => {

  const [meals,setMeals] = useState([]);

  useEffect(()=>{

    const fetchMeals = async ()=> {
      const res = await fetch(
        "https://react-http-a2e71-default-rtdb.firebaseio.com/meals.json"
      );

      const responseData = await res.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem key={meal.id} meal={meal}></MealItem>
  ));

  

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
