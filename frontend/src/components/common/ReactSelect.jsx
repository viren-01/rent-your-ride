import React from 'react';
import Select from 'react-select';

export default function ReactSelect(props) {
    return (
        <div className="App">
            <Select
                onChange={props.onChange}
                options={props.options || []}
                placeholder={props.placeholder || ''}
                value={props.value}
            />
        </div>
    );
}