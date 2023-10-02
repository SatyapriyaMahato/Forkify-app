import * as model from "./model.js";

// module for polyfilling
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// import icons from the img file
import recipeView from "./view/viewRecipe.js";
import searchView from "./view/searchView.js";



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
    recipeView.renderError();
  }

}

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    await model.loadSearchResults(query);
    console.log(model.state.search.results);

  } catch (err) {
    console.log(err);
  }
}




const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}
init();

controlSearchResults("pizza");


