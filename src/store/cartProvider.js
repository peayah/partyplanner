import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items:[],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalAmount = 
            state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
            );

        const exsistingCartItem = state.items[existingCartItemIndex];
        
        let updatedItems

        if (exsistingCartItem) {
            const updatedItem = {
                ...exsistingCartItem,
                amount: exsistingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
    
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