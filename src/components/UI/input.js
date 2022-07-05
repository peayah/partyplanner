import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils"

const Input = props => {
    return <div className = {classes.input}>
        <label htmlFor={props.input.id}>{props.name}</label>
        <input {...props.input} />
    </div>
};

export default Input