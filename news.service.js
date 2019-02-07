const httpClient = new HttpClient();

class NewsService {
    getTopHeadlinesNews(category = ENV.category, country = ENV.country, callback) {
        httpClient.get(`${ENV.apiUrl}/top-headlines?country=${country}&category=${category}`, callback);
    }
}

class Search {
    everything(search, callback) {
        httpClient.get(`${ENV.apiUrl}/everything?q=${search}`, callback);
    }
}