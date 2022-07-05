import classes from "./MealItemForm.module.css"

const MealItemForm = props => {
    return (
    <form className={classes.form}>
        <input label="Amount" inputMode={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            defaultValue: "1"
            }} />
        <button>+ Add</button>
    </form>
    );
};

export default MealItemForm