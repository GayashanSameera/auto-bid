import BrowserStorage from '../middlewares/storage';



export const handleSession = session => {
    let loggedUser = BrowserStorage.getInstance().getLoggedUser();
    loggedUser = session ? session.loggedUser : null;
    BrowserStorage.getInstance().setUserSession(session);
};

export const clearSession = data => {
    BrowserStorage.getInstance().setUserSession(data);
};

export const getVerifiedSession = session => {
    let loggedUser = BrowserStorage.getInstance().getLoggedUser();
    //this sould be validated by decoding JWT
    if (loggedUser && loggedUser.email) {
        return loggedUser;
    } else {
        return null;
    }
};