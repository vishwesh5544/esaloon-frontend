import axios from "axios";
import {User} from "../models/User";

class Api {
    protected baseUrl = "http://127.0.0.1:5000";
    private headers = {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    };
    protected axiosClient = axios.create({
        baseURL: this.baseUrl,
        headers: this.headers
    });
}

interface IUserApi {
    login(): Promise<any>;

    signUp(signUpData: User): Promise<any>;
}

export class UserApi extends Api implements IUserApi {
    async login() {

    }

    async signUp(signupData: User) {
        return this.axiosClient.post('/user', signupData);
    }

    
}

