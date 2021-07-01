import React from 'react';
//import { useStateValue } from 'StateProvider';
import styles from './InputField.styles';

interface InputFieldProps {
    title?: string,
    widgetTitle: string,
    setwidgetTitle: (event: string)=>void ;
}

const InputField: React.FC<InputFieldProps> = ({ title,widgetTitle,setwidgetTitle}) => {

    return (
        <div css={styles}>
                <label className="field--heading" htmlFor="widget-title">{title}</label>
                <input type="text" id="widget-title" name="widget-heading" placeholder={widgetTitle} value={widgetTitle} onChange={event => setwidgetTitle(event.target.value)}/>
        </div>
    );
};

export default InputField;
