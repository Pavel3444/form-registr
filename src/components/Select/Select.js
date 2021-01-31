import classes from './Select.module.css';
import {useState} from 'react';
import SelectList from "../SelectList/SelectList";


const Select = props => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(props.disabledOption)

    const selectHandler = () =>{
     setOpen(prev=>!prev)

    }
    const cls =[
        classes.Select,
        open ? classes.active : null
    ]

    const options = props.setLangOptions();

    const  selectedEl = (e) => {
         setValue(val=> e.target.textContent);
         props.changeLocale(e);
    }
    return(
            <div
                className={cls.join(' ')}
                id={props.id}
                onClick={selectHandler}
            >
                {value}

                { open ?
                <SelectList
                    options={options}
                    selectedEl={ selectedEl}
                /> :
                    null
                }
            </div>
    )
}
export default Select;