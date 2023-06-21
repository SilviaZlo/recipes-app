// import useState
import { useState } from "react";
import './styles/Form.css';

const Form = ({handleSubmit}) => {

    console.log('Form is rendering!');

    // **********************

    // What do we need to implement within this form?
    // * stop the page from reloading on form submit
    // * how to keep track of the selection the user has made within the dropdown
    // ** what do we do with the user's selection upon form submit?

    // **********************

    // 1D. initialize a state to represent the changing selected value within the dropdown
    const [selection, setSelection] = useState("");

    // 1B. define a change event handler
    // update state to reflect the new choice the user has made within the dropdown
    const handleChange = (e) => {
        console.log(e);

        setSelection(e.target.value);
    }

    return (
        // when the form is submitted, call the func which was passed down via props from Recipes
        <form action="" onSubmit={(e) => {
            handleSubmit(e, selection)
        }}>

            <div className="formLabel"><label >Filter recipes by choosing one of the following cuisines:</label></div>
        {/* CONTROL aka BIND your inputs! */}
        {/* 1. bind an onChange event to the dropdown */}
        {/* 1A. pass it an event handler */}
        <select
            name=""
            id=""
            onChange={handleChange}
            // 1E. in order to convert this element into a 'controlled input', its value needs to be dictated by React!
            value={selection}
            class="selectionButton"
        >
            <option value="" disabled>Pick one:</option>
            {/* injecting the accepted values for the API's orientation param into each option */}
            <option value="italian">Italian</option>
            <option value="greek">Greek</option>
            <option value="Indian">Indian</option>
        </select>
        <button>Search recipes!</button>
    </form>
    )
}

export default Form;