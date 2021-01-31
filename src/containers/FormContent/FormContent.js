import classes from  './FormContent.module.css';
import FormElement from "../../components/FormElement/FormElement";
import Button from "../../components/Button/Button";
import PolicyElement from "../../components/PolicyElement/PolicyElement";


const FormContent = props => {

   const renderInputs = props.formInputs.map((el,i)=>{
        return(
            <FormElement
            key={`elementInput-${i}`}
            InputCont={props.formInputs[i]}
            validation={props.validation}
            phoneTemplate={props.phoneTemplate}
            />
        )
    })

    const renderButtons = props.formButtons.map((el, i)=>{
        return(
            <Button
            key={`formsBtn-${i}`}
            text={el.text}
            isDisabled={props.totalValidate}
            type={el.type}
            />
        )
    })

    const renderSelect = props.formSelects.map((el, i)=>{
        return(
            <FormElement
                key={`elementSelect-${i}`}
                changeLocale={props.changeLocale}
                SelectCont={props.formSelects[i]}
                setLangOptions={props.setLangOptions}
            />
        )
    })

    return(
        <form className={classes.FormContent}>

            {renderInputs}

            {renderSelect}

          <PolicyElement
          policyCont={props.formPolicy}
          checkPrivacy={props.checkPrivacy}
          />

            {renderButtons}

        </form>
    )
}
export default FormContent;