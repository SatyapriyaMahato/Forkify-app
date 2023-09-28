import * as model from "./model.js";

// module for polyfilling
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// import icons from the img file
import recipeView from "url:../js/view/viewRecipe.js";
console.log(recipeView);


const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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
    alert(err);
  }

}


// window.addEventListener(hashchange, controlRecipes);
// window.addEventListener(load, controlRecipes);

const evs = ['load', 'hashchange'];
evs.forEach(ev => {
  window.addEventListener(ev, controlRecipes);
})
controlRecipes();