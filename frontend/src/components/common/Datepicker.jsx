import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function Datepicker(props) {
    const [startDate, setStartDate] = useState(null);
    return (
        <DatePicker
            selected={props.selected || startDate}
            showIcon={props.showIcon}
            onChange={(e) => {
                console.log("EEEE", e)
                props.onChange(e)
            }}
            showTimeSelect
            dateFormat="dd-MM-YYYY p"
            placeholderText={props.placeholder || ''}
            minDate={props.startDate || ''}
        />
    );
}