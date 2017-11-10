import { Observable } from 'rxjs/Observable';

export class AuthService {
    loggedin = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedin);
                }, 800);
            }
        );
        return promise;
    }
    logIn() {
        this.loggedin = true;
    }
    logOut() {
        this.loggedin = false;
    }
}
