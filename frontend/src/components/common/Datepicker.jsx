import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function Datepicker(props) {
    return (
        <DatePicker
            selected={props.selected || ''}
            showIcon={props.showIcon}
            onChange={(e) => {
                props.onChange(e)
            }}
            showTimeSelect
            dateFormat="dd-MM-YYYY p"
            placeholderText={props.placeholder || ''}
            minDate={props.startDate || ''}
        />
    );
}