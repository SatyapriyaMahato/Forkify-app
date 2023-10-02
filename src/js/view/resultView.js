import icons from "url:../../img/icons.svg";


class resultView {
    #parentEl = document.querySelector('.results');
    #data;
    #errorMessage = 'We could not find that recipe. Please try another one!';
    #message = '';

    render(data) {
        this.#data = data;
        const markup = this.#generateMarkup();

        this.#clear();
        this.#parentEl.insertAdjacentHTML("afterbegin", markup);
    };

    #generateMarkup() {
        return this.#data.map((li) => this.#generateMarkupPreview(li)).join('');
    }

    #clear() {
        this.#parentEl.innerHTML = '';
    };

    #generateMarkupPreview(prevData) {
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
                <use href=${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>`
    }
}

export default new resultView();