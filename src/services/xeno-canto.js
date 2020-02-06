export default class XenoCantoAPI {
    _apiBase = 'https://www.xeno-canto.org/api/2/recordings?query=';
    _proxyUrl = 'https://cors-anywhere.herokuapp.com/'

    getBird = async (birdName) => {
        const url = `${this._proxyUrl}${this._apiBase}${birdName}`;
        const res = await fetch(url);

        try {
            const response = await fetch(url);
            const json = await response.json();
            return json.recordings[0].url;
        } catch (err) {
            // тут вернуть изображдение по умолчанию
            console.log('вернуть звук заглушку по умолчанию')
        }

        return res;
    }
}