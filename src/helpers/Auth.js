import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "acromatico.auth0.com",
        clientID: "yBzP2Ggea5JGqIKFxTOh6QeH7fV36gyu",
        redirectUri: "http://localhost:3000/callback",
        audience: "https://acromatico.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid profile"
    });

    login = () => {
        this.auth0.authorize();
    };

    handleAuthentication = () => {
        return new Promise((res,rej) => {
            this.auth0.parseHash((err, results) => {
                if (results && results.accessToken && results.idToken) {
                    let expiresAt = JSON.stringify((results.expiresIn) * 1000 + new Date().getTime());
                    localStorage.setItem("access_token", results.accessToken);
                    localStorage.setItem("id_token", results.idToken);
                    localStorage.setItem("expires_at", expiresAt);
                    res(results.idToken);
                } else if(err){
                    console.log(err);
                    rej('Something went wrong');
                }
            })
        });
    };

    isAuthenticated = () => {
        let expiresAt = localStorage.getItem("expires_at");
        return new Date().getTime() < JSON.parse(expiresAt);
    };

    logout = (history) => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        history.push({pathname: '/'})
    };

    getProfile = () => {
        if(localStorage.getItem("id_token")){
            return jwtDecode(localStorage.getItem("id_token"));
        }
        return {};
    };
}