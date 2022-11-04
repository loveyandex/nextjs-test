import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router'
import { fetchWrapper } from 'helpers';


const { publicRuntimeConfig } = getConfig();
const baseUrl = `http://localhost:9080`;

const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));

export const userService = {
    user: userSubject.asObservable(),
    get userValue() { return userSubject.value },
    login,
    logout,
    getAll
};

function login(username, password) {
    return fetchWrapper.post_xxx(`${baseUrl}/login`, [{ key: "username", value: username }, { key: "password", value: password },])
        .then(user => {
            // publish user to subscribers and store in local storage to stay logged in between page refreshes
            console.log(user)

            userSubject.next(user);
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function logout() {
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem('user');
    userSubject.next(null);
    Router.push('/login');
}

function getAll() {
    return fetchWrapper.get(baseUrl);
}
