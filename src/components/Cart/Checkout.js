import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

// address validation helper functions
const isEmpty = value => value.trim() === "";
const zipIsFiveChars = value => value.trim().length === 5;
const phoneIsTenChars = value => value.trim().length === 10;

const Checkout = (props) => {

    const [formInputValidity, setFormInputsValidity] = useState({
        name: true,
        address: true,
        city: true,
        zip: true,
        phone: true,
        email: true
    });

    const nameInputref = useRef();
    const addressInputref = useRef();
    const zipInputref = useRef();
    const cityInputref = useRef();
    const phoneInputref = useRef();
    const emailInputref = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputref.current.value;
        const enteredAddress = addressInputref.current.value;
        const enteredZip = zipInputref.current.value;
        const enteredCity = cityInputref.current.value;
        const enteredPhone = phoneInputref.current.value;
        const enteredEmail = emailInputref.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredAddressIsValid = !isEmpty(enteredAddress);
        const enteredZipIsValid = !isEmpty(enteredZip) && zipIsFiveChars(enteredZip);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPhoneIsValid = !isEmpty(enteredPhone) && phoneIsTenChars(enteredPhone);
        const enteredEmailIsValid = !isEmpty(enteredEmail)
        setFormInputsValidity({
            name: enteredNameIsValid,
            address: enteredAddressIsValid,
            zip: enteredZipIsValid,
            city: enteredCityIsValid,
            phone: enteredPhoneIsValid,
            email: enteredEmailIsValid
        })

        const formIsValid = enteredNameIsValid && 
                            enteredAddressIsValid && 
                            enteredZipIsValid && 
                            enteredCityIsValid &&
                            enteredPhoneIsValid &&
                            enteredEmailIsValid;
        
        if (!formIsValid) {
            return
        }
        props.onConfirm({
            name: enteredName,
            address: enteredAddress,
            zip: enteredZip,
            city: enteredCity,
            phone: enteredPhone,
            email: enteredEmail
        })
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
        <div 
        className={`${classes.control} ${
            formInputValidity.phone ? "" : classes.invalid
        }`}>
            <label htmlFor='phone'>Phone</label>
            <input type='text' id='phone' ref={phoneInputref}/>
            {!formInputValidity.phone && <p>Please enter valid phone number (10 digits)</p>}
        </div>
        <div 
        className={`${classes.control} ${
            formInputValidity.email ? "" : classes.invalid
        }`}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailInputref}/>
            {!formInputValidity.email && <p>Please enter valid email.</p>}
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