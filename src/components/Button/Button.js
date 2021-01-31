import classes from './Button.module.css';

const Button = props => {

    return (
        <button
            className={classes.Button}
            type={props.type}
            disabled={!props.isDisabled}
            >
            {props.text}
        </button>
    )
}
export default Button;