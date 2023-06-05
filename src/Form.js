// import useState
import { useState } from "react";
import './styles/App.css';

const Form = ({handleSubmit}) => {

    console.log('Form is rendering!');

    // **********************

    // This is what needs to get implemented within the form:
    // * stop the page from reloading on form submit
    // * keep track of the cuisine selected by the user (within the dropdown)
    // *define what to do with the user's selection upon form submit

    // **********************

    // initialize a state to represent the changing selected value within the dropdown
    const [selection, setSelection] = useState("");

    // define a change event handler
    // update state to reflect the new choice the user has made within the dropdown
    const handleChange = (e) => {
        setSelection(e.target.value);
    }

    return (
        // when the form is submitted, call the func which was passed down via props from Recipes
        <form action="" onSubmit={(e) => {
            handleSubmit(e, selection)
        }}>

        <label class="formLabel">Filter recipes by choosing one of the following cuisines:</label>
        {/* CONTROL/BIND the inputs! */}
        {/* bind an onChange event to the dropdown */}
        {/* pass it an event handler */}
        <select
            name=""
            id=""
            onChange={handleChange}
            // in order to convert this element into a 'controlled input', its value needs to be dictated by React.
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