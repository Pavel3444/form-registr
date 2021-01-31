import classes from './FormHeader.module.css';

const FormHeader = props => {

    const renderLinks = props.headerCont.links.map((el, i) => {

        return (
            <a
                key={`headerLinks-${i}`}
                href={el.href}
            >{el.text}</a>
        )
    })

    return (
        <div className={classes.FormHeader}>
            <h2>{props.headerCont.formName}</h2>
            <p>{props.headerCont.text} {renderLinks}</p>
        </div>
    )
}
export default FormHeader;