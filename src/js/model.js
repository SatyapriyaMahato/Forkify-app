import { async } from "regenerator-runtime";
import { API_KEY, RES_PER_PAGE } from "./config";
import { getJSON } from "./helper";

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultPerPage: RES_PER_PAGE
    }
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

export const loadSearchResults = async function (query) {
    try {
        const data = await getJSON(`${API_KEY}?search=${query}`);
        state.search.results = data.data.recipes.map((arr) => {
            return {
                id: arr.id,
                imageUrl: arr.image_url,
                publisher: arr.publisher,
                title: arr.title,
            }
        })
    } catch (err) {
        throw err;
    }
}

export const getSearchResultPerPage = function (page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultPerPage;
    const end = page * state.search.resultPerPage;

    return state.search.results.slice(start, end);
}
