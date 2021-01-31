import classes from './Error.module.css';
import React from 'react';


const Error = props => {
    return (
        <React.Fragment>
            { props.isTouched && !props.isValidate
                    ?
            <div className={classes.Error}>
                {props.errorText}
            </div>
                : null

            }

        </React.Fragment>
    )
}
export default Error;