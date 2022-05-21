import axios from "axios";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const instance = axios.create({
    baseURL: 'https://tina-baby-shower-game.herokuapp.com',
    timeout: 1000
});

export class service{
    static getApi(){
        return instance
    }

    static getRealTimeStockData(){
        return axios.get("/stocks")
    }
}
