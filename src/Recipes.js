import Form from "./Form";
import Pic from "./Pic";
import { useEffect, useState } from "react";
import axios from "axios";
import './styles/App.css';

const Recipes = () => {

    console.log('Recipes are rendering!');

    // initializing the state which will represent the array of recipe pic objects coming from the API
    const [recipePics, setRecipePics] = useState([]);

    // initializing a piece of state which represents the cuisine value (which the user will be selecting from the form dropdown)
    const [cuisineOptions, setCuisineOptions] = useState(null);

    // defining a side effect which makes a call to the Spoonacular API
    useEffect(() => {
        axios({
            url: 'https://api.spoonacular.com/recipes/complexSearch',
            method: 'GET',
            dataResponse: 'json',
<<<<<<< HEAD
=======

>>>>>>> 4ab292f3536248e337af3c2152e5bfa58aa6f214
            params: {
                cuisine: cuisineOptions,
                apiKey: '22dfd5f34ce14cb7add89275c1fe006c',
                addRecipeInformation: true,
<<<<<<< HEAD
            },
        }).then( (response) => {
            
=======

            },
        }).then((response) => {
>>>>>>> 4ab292f3536248e337af3c2152e5bfa58aa6f214

            // update state using the array returned to us from the API
            setRecipePics(response.data.results);
        });

<<<<<<< HEAD
        //  use the cuisine option state within in the dependency array, so that every time the state changes, the side effect - AKA the API call - runs and gets pics of the chosen cuisine 
=======
        // using the cuisine option state within in the dependency array, so that every time the state changes, the side effect - the API call - runs and gets pics of the chosen cuisine 
>>>>>>> 4ab292f3536248e337af3c2152e5bfa58aa6f214
    }, [cuisineOptions]);
    

<<<<<<< HEAD
    // define an event handler which will be passed down to Form via props (Form will trigger/call this function when the form is submitted)
=======
    // defining an event handler which will be passed down to Form via props (Form will trigger/call this function when the form is submitted)
>>>>>>> 4ab292f3536248e337af3c2152e5bfa58aa6f214
    const selectCuisine = (event, cuisine) => {

        // this func is going to be called when the form is submitted, so it must first STOP the default behaviour of the form submission (= not refresh the page)
        event.preventDefault();

<<<<<<< HEAD
        // console.log('form has been submitted')
        // console.log(cuisine);

        //  update the cuisine's recipe photos state with the user's choice
=======
        // updating the cuisine's recipe photos state with the user's choice
>>>>>>> 4ab292f3536248e337af3c2152e5bfa58aa6f214
        setCuisineOptions(cuisine);
    }
    console.log(recipePics);
    return (
        <section>
<<<<<<< HEAD
            {/* pass the form submit event handler func down via props */}
            <Form handleSubmit={selectCuisine} />
            <div class="wrapper">
            <ul className="photos">
                {
                    // map through the state array and for each object in the array we will return a Pic component
                    // pass down: the image URL, a unique id, and alt text via props
                    // 

                    recipePics.map((recipeObj) => {
                        return (
                            <div class="recipesContainer">
                                <div className="text">
                                <p>{recipeObj.title}</p>
                                <a href={recipeObj.sourceUrl} target_="blank">Details</a>
                                </div> 
                                <Pic
                                    key={recipeObj.id}
                                    imageSource={recipeObj.image}
                                    altText={recipeObj.title}
                                    />
                            </div>
                        )
                    })
                }
=======
            {/* passing the form submit event handler func down via props */}
            <Form handleSubmit={selectCuisine} />
            <div class="wrapper">
                <ul className="photos">
                    {
                        // mapping through the state array and for each object in the array we will return a Pic component
                        // passing down: the recipe title, the recipe details URL, the image URL, a unique id, an alt text via props 
                        recipePics.map((recipeObj) => {
                            return (
                                <div class="recipesContainer">
                                    <div className="text">
                                        <p>{recipeObj.title}</p>
                                        <a href={recipeObj.sourceUrl} target_="blank">Details</a>
                                    </div>
                                    <Pic
                                        key={recipeObj.id}
                                        imageSource={recipeObj.image}
                                        altText={recipeObj.title}
                                    />
                                </div>
                            )

                        })
                    }
>>>>>>> 4ab292f3536248e337af3c2152e5bfa58aa6f214
                </ul>
            </div>
        </section>
    )
}

export default Recipes;