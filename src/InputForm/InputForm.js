import React from 'react';

const form = (props) => {
    return (
        <form onSubmit={props.func}>
        <h1>Form for {props.form.info.form.title}</h1>

            <button className="add_field_button">Add More Fields</button>
            <div className="input_fields_wrap" />
            <div>
                <input type="text" name="mytext" />
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
};

export default form;