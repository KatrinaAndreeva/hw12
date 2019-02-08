const searchMatches = new Search();
const uiServiceForSearch = new NewsUI();
const inputSearch = form['search'].value;

function onInput(event) {
    // if (inputSearch.length < 4) return console.error('Please enter more than 3 letters');
    searchMatches.everything(search, (response) => {
        const { totalResults, articles } = response;

        console.log(`Total results ${totalResults}`);
        console.log(articles);

        uiServiceForSearch.clearContainer();

        articles.forEach((article) => uiServiceForSearch.addArticle(article));
    });
}


function everything(search, callback) {
    searchMatches.everything(search, callback);
}

// поідомлення якщо новин не найдено
// uiService2.addArticle(article) {
//     const template = NewsUI.generateArticleTemplate(article);
//     this.newsContainer.insertAdjacentHTML('afterbegin', template);
// }



inputSearch.addEventListener('keyup', onInput);
