const search = new Search();
const searchSelect = form['search'];

function getNewsBySearch() {
    let msg = document.getElementById('search').value;
    if (msg.length < 4) return console.error('Please enter more than 3 letters');
    // console.log(msg);

    let req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            document.querySelector('.news-wrap .row').innerHTML = req.responseText;
        }
    }

}

function onInput(event) {
    const input = searchSelect.value;


    search.everything(search, (response) => {
        const { totalResults, articles } = response;

        console.log(`Total results ${totalResults}`);
        console.log(articles);

        uiService.clearContainer();

        articles.forEach((article) => uiService.addArticle(article));
    });
}



searchSelect.addEventListener('keyup', onInput);