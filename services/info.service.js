import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router'
import { fetchWrapper } from 'helpers';
 

const { publicRuntimeConfig } = getConfig();
const baseUrl = `http://localhost:9090/api`;
const newUsersubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('newUsers')));
const gameSharesubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('gameShares')));
const gamersubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('gamers')));



export const infoService = {
    newUsers:newUsersubject.asObservable(),
    getNewGamers,
    getAllGameShares,
    getAllGamers,

};

function getNewGamers(){
    return fetchWrapper.get(`${baseUrl}/gamers/today` )
    .then(newUsers => {
        // publish user to subscribers and store in local storage to stay logged in between page refreshes
        console.log(newUsers)
        newUsersubject.next(newUsers);
        localStorage.setItem('newUsers', JSON.stringify(newUsers));
        return newUsers;
    });
}

async function getAllGameShares(){
    const gamehares = await fetchWrapper.get(`${baseUrl}/gamers/gameshares`);
    // publish user to subscribers and store in local storage to stay logged in between page refreshes
    console.log(gamehares);
    gameSharesubject.next(gamehares);
    localStorage.setItem('gameShares', JSON.stringify(gamehares));
    return gamehares;
}
async function getAllGamers(){
    const gamers = await fetchWrapper.get(`${baseUrl}/gamers`);
    // publish user to subscribers and store in local storage to stay logged in between page refreshes
    console.log(gamers);
    gameSharesubject.next(gamers);
    localStorage.setItem('gamers', JSON.stringify(gamers));
    return gamers;
}