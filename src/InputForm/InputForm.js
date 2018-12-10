import React from 'react';

const form = (props) => {
    return (
        <form onSubmit={props.func}>
        <h2>FILL IN</h2>
        <h4>{props.form.info.form.title}</h4>

            <button className="add_field_button">Add More Fields</button>
            <div>
                <input type="text" name="mytext" /> X
                <div className="input_fields_wrap"/>
            </div>

            <input type="submit" value="Submit" />

        </form>
    )
};

export default form;