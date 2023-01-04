import {User} from "../models/User";
import Api from './api';


interface IUserApi {
    login(loginDetails: any): Promise<any>;

    signUp(signUpData: User): Promise<any>;
}

export class UserApi extends Api implements IUserApi {
    async login(loginDetails: any) {
        return this.axiosClient.post("/user/login", loginDetails);
    }

    async signUp(signupData: User) {
        // return axios.post("http://127.0.0.1:5000/user", signupData);
        return this.axiosClient.post('/user', signupData);
    }


}

