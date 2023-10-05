import * as model from "./model.js";

// module for polyfilling
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// import icons from the img file
import recipeView from "./view/recipeView.js";
import searchView from "./view/searchView.js";
import resultView from "./view/resultView.js";
import paginationView from "./view/paginationView.js";


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const controlRecipes = async function () {
  try {
    recipeView.renderMessage();
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

    // step-1 Get Search query
    const query = searchView.getQuery();
    if (!query) return;


    // step-2 Get Search Results
    resultView.renderSpinner();
    await model.loadSearchResults(query);

    // step-3 show results
    const data = model.getSearchResultPerPage(1);
    resultView.render(data);

    paginationView.render(model.state.search);

  } catch (err) {
    console.log(err);
  }
}

const controlPagination = function (pageNum) {
  const data = model.getSearchResultPerPage(pageNum);
  resultView.render(data);

  paginationView.render(model.state.search);
}


const init = function () {
  recipeView.addHandlerRender(controlRecipes);

  searchView.addHandlerSearch(controlSearchResults);

  paginationView.addHandlerClick(controlPagination);
}
init();

controlSearchResults("pizza");


