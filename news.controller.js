const newsService = new NewsService();
const uiService = new NewsUI();

// UI Elements

const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];


function onSelectChange(event) {
    const country = countrySelect.value;
    const category = categorySelect.value;
    if (!country || !category) return console.error('Enter a country and the category for search');

    newsService.getTopHeadlinesNews(category, country, (response) => {
        const { totalResults, articles } = response;

        console.log(`Total results ${totalResults}`);
        console.log(articles);

        uiService.clearContainer();

        articles.forEach((article) => uiService.addArticle(article));
    });
}




function getTopHeadlinesNews(category, country, callback) {
    newsService.getTopHeadlinesNews(category, country, callback);
}



countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);