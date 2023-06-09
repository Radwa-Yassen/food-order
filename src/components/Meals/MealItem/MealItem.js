import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = props=>{

    const cartCtx= useContext(CartContext);

    const onAddToChartHandler = (amount)=>{
        cartCtx.addItem({
            id:props.meal.id,
            name:props.meal.name,
            amount:amount,
            price:props.meal.price
        });

    }

    const price = `$${props.meal.price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.meal.name}</h3>
                <div className={classes.description}>{props.meal.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToChart={onAddToChartHandler}></MealItemForm>
            </div>
        </li>
    );
}

export default MealItem;