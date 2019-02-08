const httpClient = new HttpClient();
const httpClient2 = new HttpClient();

class NewsService {
    getTopHeadlinesNews(category = ENV.category, country = ENV.country, callback) {
        httpClient.get(`${ENV.apiUrl}/top-headlines?country=${country}&category=${category}`, callback);
    }
}

class Search {
    everything(inputSearch, callback) {
        httpClient2.get(`${ENV.apiUrl}/everything?q=${inputSearch.value}`, callback);
    }
}