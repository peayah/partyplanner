import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items:[],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === "REMOVE") {

    }

    return defaultCartState
}

const CartProvider = props => {

    const [CartState, dipatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dipatchCartAction({
            type: 'ADD',
            item: item
        })
    };
    const removeItemfromCartHandler = (id) => {
        dipatchCartAction({
            type: 'REMOVE',
            item: id
        })
    };
    
    const cartContext = {
        items: CartState.items,
        totalAmount: CartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemfromCartHandler
    };
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

};

export default CartProvider;