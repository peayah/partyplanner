
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose from our broad selection of brunch, lunch or dinner meals.
      </p>
      <p>You can enjoy the company of your guests while we take care of your meal.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time by our experienced chefs!
      </p>
      <p>All portions are of servings of four.</p>
      <p>All prices include tax.</p>
    </section>
  );
};

export default MealsSummary;