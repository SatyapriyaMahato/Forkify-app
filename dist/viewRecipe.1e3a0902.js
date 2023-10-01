function e(e,i,s,n){Object.defineProperty(e,i,{get:s,set:n,enumerable:!0,configurable:!0})}function i(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=s.parcelRequire3a11;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var s={id:e,exports:{}};return n[e]=s,i.call(s.exports,s,s.exports),s.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,i){t[e]=i},s.parcelRequire3a11=r),r.register("kyEFX",function(i,s){e(i.exports,"register",function(){return n},function(e){return n=e}),e(i.exports,"resolve",function(){return t},function(e){return t=e});var n,t,r={};n=function(e){for(var i=Object.keys(e),s=0;s<i.length;s++)r[i[s]]=e[i[s]]},t=function(e){var i=r[e];if(null==i)throw Error("Could not resolve bundle with id "+e);return i}});var a={};a=new URL(r("kyEFX").resolve("cPzGy"),import.meta.url).toString();class c{#e=document.querySelector(".recipe");#i;render(e){this.#i=e;let i=this.#s;this.#n,this.#e.insertAdjacentHTML("afterbegin",i)}#n(){this.#e.innerHTML=""}// Loader spinner
renderSpinner=function(){let e=`<div class="spinner">
    <svg>
      <use href="${/*@__PURE__*/i(a)}#icon-loader"></use>
    </svg>
  </div>`;this.#e.innerHTML="",this.#e.insertAdjacentHTML("afterbegin",e)};#s(){return`<figure class="recipe__fig">
        <img src=${this.#i.imageUrl} alt="Tomato" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this.#i.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/i(a)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this.#i.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/i(a)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this.#i.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${/*@__PURE__*/i(a)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${/*@__PURE__*/i(a)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated">
          <svg>
            <use href="${/*@__PURE__*/i(a)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="${/*@__PURE__*/i(a)}#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
        
          ${this.#i.ingredients.map(e=>`<li class="recipe__ingredient">
                  <svg class="recipe__icon">
                  <use href="${/*@__PURE__*/i(a)}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${e.quantity}</div>
                <div class="recipe__description">
                  <span class="recipe__unit">${this.#i.unit}</span>
                  ${this.#i.description}
                </div>
              </li>`).join("")}
         
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this.#i.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href=${this.#i.sourceUrl}
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/i(a)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div> `}}new c;//# sourceMappingURL=viewRecipe.1e3a0902.js.map

//# sourceMappingURL=viewRecipe.1e3a0902.js.map
