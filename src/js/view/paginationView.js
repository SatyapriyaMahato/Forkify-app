import View from "./mainView";
import icons from "url:../../img/icons.svg";

class paginationView extends View {
    _parentEl = document.querySelector('.pagination');

    addHandlerClick(handler) {
        this._parentEl.addEventListener('click', function (e) {
            e.preventDefault();


            const btn = e.target.closest('.btn--inline');
            if (!btn) return;
            const pageNum = +btn.dataset.page_num;

            handler(pageNum);
        })
    }

    _generateMarkup() {
        const numPages = Math.ceil(this._data.results.length / this._data.resultPerPage);
        const currPage = this._data.page;

        //page 1 and there are others
        if (currPage === 1 && numPages > 1) {
            return `
            ${this._generateRightPageNumMarkup()}
            `};

        // last page
        if (currPage === numPages && numPages > 1) {
            return `
            ${this._generateLeftPageNumMarkup()}
                
        `};

        // intermediate pages
        if (currPage < numPages) {
            return `
                ${this._generateLeftPageNumMarkup()}${this._generateRightPageNumMarkup()}
            `};

        // first page
        return "";
    }

    _generateLeftPageNumMarkup() {
        return `
            <button data-page_num = "${this._data.page - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${this._data.page - 1}</span>
            </button>
        `;

    }

    _generateRightPageNumMarkup() {
        return `
            <button data-page_num = "${this._data.page + 1}"  class="btn--inline pagination__btn--next">
                <span>Page ${this._data.page + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>  
        `;
    }


}

export default new paginationView();