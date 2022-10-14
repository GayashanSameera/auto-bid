import BrowserStorage from '../middlewares/storage';

let loggedUser = BrowserStorage.getInstance().getLoggedUser();

export const handleSession = session => {
    loggedUser = session ? session.loggedUser : null;
    BrowserStorage.getInstance().setUserSession(session);
};