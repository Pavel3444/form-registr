import classes from './FormElement.module.css';
import React from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Error from "../Error/Error";


const FormElement = props => {
    return (
        <div className={classes.FormElement}>
            {props.InputCont ?
                <React.Fragment>
                    <div className={classes.label}> {props.InputCont.label}</div>
                    <div>
                        <Input
                            placeholder={props.InputCont.placeholder}
                            type={props.InputCont.type}
                            name={props.InputCont.name}
                            validation={props.validation}
                            phoneTemplate={props.phoneTemplate}
                        />
                    </div>
                    <Error
                      isValidate={props.InputCont.valid}
                      isTouched={props.InputCont.touched}
                      errorText={props.InputCont.error}
                    />
                </React.Fragment>
                : null
            }
            {props.SelectCont ?
                <React.Fragment>
                    <div className={classes.label}> {props.SelectCont.label}</div>
                    <div>
                        <Select
                         id={props.SelectCont.id}
                         setLangOptions={props.setLangOptions}
                         changeLocale={props.changeLocale}
                         disabledOption={props.SelectCont.diasbledOption}
                        />
                    </div>
                </React.Fragment>
                : null
            }

        </div>
    )
}

export default FormElement;