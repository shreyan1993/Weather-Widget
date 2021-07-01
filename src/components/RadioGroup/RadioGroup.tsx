import React  from 'react';
import styles from './RadioGroup.styles';


export interface Item {
    id: string,
    radioLabel: string;
}

export interface RadioGroupProps {
    title?: string,
    items: Array<Item>;
    selectedItemId : string;
    setSelectedItemId:(itemID: string)=>void ;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
title  ,
items,
selectedItemId,
setSelectedItemId
}) => {


    return (
        <div css={styles}>
            <p className="field--label">{title}</p>
            {items.map((item,key) => (
                <span className={`field--wrapper ${key+1}`}>
                    <input type="radio" id={item.id} checked={item.id === selectedItemId} onClick={()=>{setSelectedItemId(item.id)}}/>
                    {item.id === 'celsius' || item.id === 'farenheit'
                        ? <label htmlFor={item.id}>&deg;{item.radioLabel}</label>
                        : <label htmlFor={item.id}>{item.radioLabel}</label>
                    }
                </span>
                ))}
        </div>
    );
};

export default RadioGroup;
