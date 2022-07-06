import { Fragment } from "react";
import classes from "./Modal.module.css"
import { ReactPortal } from "react";


const Backdrop = props => {
    return <div className={classes.Backdrop}/>
};

const ModalOverlay = props => {

    return (<div className={classes.Modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop/>, portalElement)},
        {ReactDOM.createPortal(<ModalOverlay>(props.children)</ModalOverlay>, portalElement)}
    </Fragment>
}

export default Modal;