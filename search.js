const searchMatches = new Search();
const uiServiceForSearch = new NewsUI();
//const inputSearch = form['search'].value;

function onInput(event) { //alert('1111');
    let inputSearch = form['search'].value;
    document.getElementById("text_none").style.display = "none";
    if (inputSearch.length < 4) {
        document.getElementById("text_none").style.display = "block";
        uiServiceForSearch.clearContainer();
        return console.error('Please enter more than 3 letters');
    }
    searchMatches.everything(search, (response) => {
        const { totalResults, articles } = response;
        uiServiceForSearch.clearContainer();
        if (totalResults == 0) {
            uiServiceForSearch.noneArticle('News are not found!');
        }
        else if (totalResults > 0) {
            //alert(totalResults);
            console.log(`Total results ${totalResults}`);
            //console.log(articles);
            articles.forEach((article) => uiServiceForSearch.addArticle(article));
        }
    });
}


function everything(search, callback) {
    searchMatches.everything(search, callback);
}

form['search'].addEventListener('keyup', onInput);
