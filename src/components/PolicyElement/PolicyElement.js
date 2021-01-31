import classes from './PolicyElement.module.css';
import {useState} from 'react';
import check  from './Checked.png';
import unCheck from './check-unactive.png';


const PolicyElement= props => {
    const [checked, setChecked] = useState(false);

    const checkHandler=()=>{
        props.checkPrivacy();
        setChecked(val => !val);
    }

    const text1 = props.policyCont.text.split(' ').slice(0, props.policyCont.linkIndex).join(' ');
    const text2 = props.policyCont.text.split(' ').slice(props.policyCont.linkIndex+props.policyCont.linkLength, props.policyCont.text.length).join(' ')


    return(
        <div className={classes.PolicyElement}>

            <img
                onClick={checkHandler}
                className={classes.Check}
                src={checked ? check : unCheck} alt=""/>
            <p>
                {text1} <a href={props.policyCont.href}> {props.policyCont.linkText}</a> {text2}

                {/*{props.policyCont.text}*/}
            </p>
        </div>
    )
}
export default PolicyElement;