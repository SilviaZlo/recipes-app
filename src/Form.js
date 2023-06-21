// import useState
import { useState } from "react";
import './styles/App.css';

const Form = ({handleSubmit}) => {

    // Form will:
    // - stop the page from reloading on form submit
    // - keep track of the cuisine selected by the user (within the dropdown)
    // - define what to do with the user's selection upon form submit

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

<<<<<<< HEAD
            <div className="formLabel"><label >Filter recipes by choosing one of the following cuisines:</label></div>
        {/* CONTROL aka BIND your inputs! */}
        {/* 1. bind an onChange event to the dropdown */}
        {/* 1A. pass it an event handler */}
=======
        <label class="formLabel">Filter recipes by choosing one of the following cuisines:</label>

        {/* bind an onChange event to the dropdown */}
        {/* pass it an event handler */}
>>>>>>> 4ab292f3536248e337af3c2152e5bfa58aa6f214
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