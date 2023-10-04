import icons from "url:../../img/icons.svg";
import View from "./mainView.js";

class resultView extends View {
  _parentEl = document.querySelector('.results');
  _data;
  _errorMessage = 'We could not find that recipe. Please try another one!';
  _message = '';


  _generateMarkup() {
    return this._data.map((li) => this._generateMarkupPreview(li)).join('');
  }


  _generateMarkupPreview(prevData) {
    console.log(prevData);
    return `<li class="preview">
        <a class="preview__link preview__link--active" href="#${prevData.id}">
          <figure class="preview__fig">
            <img src=${prevData.imageUrl} alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${prevData.title}</h4>
            <p class="preview__publisher">${prevData.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>`
  }
}

export default new resultView();