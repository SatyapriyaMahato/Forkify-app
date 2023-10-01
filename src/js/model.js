import { async } from "regenerator-runtime";
import { API_KEY } from "./config";
import { getJSON } from "./helper";

export const state = {
    recipe: {}
}

export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_KEY}${id}`);
        let { recipe } = data.data;
        state.recipe = {
            cookingTime: recipe.cooking_time,
            id: recipe.id,
            imageUrl: recipe.image_url,
            ingredients: recipe.ingredients,
            publisher: recipe.publisher,
            servings: recipe.servings,
            sourceUrl: recipe.source_url,
            title: recipe.title
        }
    } catch (err) {
        throw err;
    }
}