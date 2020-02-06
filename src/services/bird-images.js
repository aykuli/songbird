export default class BirdImage {
    _unsplasKey = 'd35b693bbc2465fad89fead4a6ea958ac2741d9791a9ece87994a879cdc68718'
    _urlBase = `https://api.unsplash.com/search/photos?page=1&per_page=100&client_id=${this._unsplasKey}&query=`;

    getImage = async (birdName) => {
        const url = `${this._urlBase}${birdName}`;

        try {
            const response = await fetch(url);
            const json = await response.json();
            return json.results[0].urls.small;
        } catch (err) {
            // тут вернуть изображдение по умолчанию
            console.log('вернуть изображдение по умолчанию')
        }
    }
}

