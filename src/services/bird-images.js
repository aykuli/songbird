export default class BirdImage {
    _flickrKey = '26eb7b127efdacfa523f2ab2ae44874d';

    _apiBase = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this._flickrKey}&tagmode=all&format=json&nojsoncallback&tags=`;
    getImage = async (birdName) => {
        const url = `${this._apiBase}${birdName}`;
        console.log(url)
        const res = await fetch(url)
        return res;
    }
}

