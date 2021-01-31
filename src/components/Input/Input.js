import classes from './Input.module.css';
import createMask from "../../services/mask";

const Input = props => {


    const changeInput = (e) => {
        if (e.target.getAttribute('name') === 'name') {
            e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z -]/, '');
        }

        if (e.target.getAttribute('name') === 'phone') {
            createMask(e, props.phoneTemplate);
        }

        props.validation(e);


    }


    return (
        <input
            className={classes.Input}
            placeholder={props.placeholder}
            name={props.name}
            type={props.type}
            onChange={(e) => changeInput(e)}
        />
    )
};

export default Input;