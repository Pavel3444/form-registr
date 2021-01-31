import classes from './SelectList.module.css';

const SelectList = props => {
    const values = Object.keys(props.options);

   const renderOptions = values.map((el, i)=>{
        return(
            <div
                key={`option-${i}`}
                data-value={el}
                className={classes.Option}
                onClick={(e)=>props.selectedEl(e)}
            >
                {props.options[el]}
            </div>
        )
    })


    return(
        <div className={classes.SelectList}>
            {renderOptions}
        </div>
    )
}
export default SelectList;