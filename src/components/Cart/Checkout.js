import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

// address validation helper functions
const isEmpty = value => value.trim() === "";
const zipIsFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {

    const [formInputValidity, setFormInputsValidity] = useState({
        name: true,
        address: true,
        city: true,
        zip: true
    });

    const nameInputref = useRef();
    const addressInputref = useRef();
    const zipInputref = useRef();
    const cityInputref = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputref.current.value;
        const enteredAddress = addressInputref.current.value;
        const enteredZip = zipInputref.current.value;
        const enteredCity = cityInputref.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredAddressIsValid = !isEmpty(enteredAddress);
        const enteredZipIsValid = !isEmpty(enteredZip) && !zipIsFiveChars(enteredZip);
        const enteredCityValid = !isEmpty(enteredCity);
    
        setFormInputsValidity({
            name: enteredNameIsValid,
            address: enteredAddressIsValid,
            zip: enteredZipIsValid,
            city: enteredZipIsValid
        })

        const formIsValid = enteredNameIsValid && 
                            enteredAddressIsValid && 
                            enteredZipIsValid && 
                            enteredCityValid;
        
        if (!formIsValid) {

        }
    
    };


    return (
    <form className={classes.form} onSubmit={confirmHandler}>
        <div 
        className={`${classes.control} ${
            formInputValidity.name  ? "" : classes.invalid       
        }`}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputref}/>
            {!formInputValidity.name && <p>Please enter valid name</p>}
        </div>

        <div 
        className={`${classes.control} ${
            formInputValidity.address ? "" : classes.invalid
        }`}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={addressInputref}/>
            {!formInputValidity.address && <p>Please enter valid address</p>}
        </div>
        <div 
        className={`${classes.control} ${
            formInputValidity.zip ? "" : classes.invalid
        }`}>
            <label htmlFor='postal'>Postal Code</label>
            <input type='text' id='postal' ref={zipInputref}/>
            {!formInputValidity.zip && <p>Please enter valid zip. (5 characters long)</p>}
        </div>
        <div 
        className={`${classes.control} ${
            formInputValidity.city ? "" : classes.invalid
        }`}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' ref={cityInputref}/>
            {!formInputValidity.city && <p>Please enter valid city</p>}
        </div>
        <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>
            Cancel
            </button>
            <button className={classes.submit}>Confirm</button>
        </div>
    </form>
    );
};

export default Checkout;