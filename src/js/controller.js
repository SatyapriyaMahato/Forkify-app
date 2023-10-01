import * as model from "./model.js";

// module for polyfilling
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// import icons from the img file
import recipeView from "./view/viewRecipe.js";


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const controlRecipes = async function () {
  try {

    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // Getting t he recipe data
    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
    // rendering the recipe data

  } catch (err) {
    console.log(err);
  }

}

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
}
init();


