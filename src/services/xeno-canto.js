export default class XenoCantoAPI {
    _apiBase = 'https://www.xeno-canto.org/api/2/recordings?query=';
    _proxyUrl = 'https://cors-anywhere.herokuapp.com/'

    getBird = async () => {
        const res = await fetch(`${this._proxyUrl}${this._apiBase}Grus+grus`);
        return res;
    }
}