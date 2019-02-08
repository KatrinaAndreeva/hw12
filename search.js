const searchMatches = new Search();
const uiService2 = new NewsUI();
const inputSearch = form['search'];


function onInput(event) {

    console.log(inputSearch.value);
    // if (inputSearch.length < 4) return console.error('Please enter more than 3 letters');


    searchMatches.everything(inputSearch, (response) => {
        const { totalResults, articles } = response;

        console.log(`Total results ${totalResults}`);
        // console.log(articles);

        uiService2.clearContainer();

        articles.forEach((article) => uiService2.addArticle(article));
    });
}


function everything(search, callback) {
    searchMatches.everything(search, callback);
}


inputSearch.addEventListener('keyup', onInput);