import BrowserStorage from '../middlewares/storage';

let loggedUser = BrowserStorage.getInstance().getLoggedUser();

export const handleSession = session => {
    loggedUser = session ? session.loggedUser : null;
    BrowserStorage.getInstance().setUserSession(session);
};

export const clearSession = data => {
    BrowserStorage.getInstance().setUserSession(data);
};

export const getVerifiedSession = session => {
    //this sould be validated by decoding JWT
    if (loggedUser && loggedUser.email) {
        return loggedUser;
    } else {
        return null;
    }
};