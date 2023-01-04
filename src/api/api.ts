import axios from "axios";

class Api {
    protected baseUrl = "http://127.0.0.1:5000";
    private headers = {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };
    protected axiosClient = axios.create({
        baseURL: this.baseUrl,
        headers: this.headers
    });

    toJson(input: any): any {
        let interim = JSON.stringify(input);
        return JSON.parse(JSON.stringify(input));
    }
}

export default Api;