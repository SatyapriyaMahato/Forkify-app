class SearchView {
    #parentEl = document.querySelector('.search');

    getQuery() {
        const query = document.querySelector('.search__field').value;
        document.querySelector('.search__field').value = '';
        return query;
    }

    addHandlerSearch(handler) {
        this.#parentEl.addEventListener('submit', function (e) {
            e.preventDefault();
            handler();
        })
    }
}

export default new SearchView();