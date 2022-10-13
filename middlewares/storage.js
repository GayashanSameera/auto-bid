import DeviceStorage from 'react-device-storage';

let _instance = null;
class BrowserStorage {
  constructor() {
    this.deviceStorage = new DeviceStorage({
      cookieFallback: true,
      cookie: {
        secure: true
      }
    });
  }

  static getInstance() {
    if (_instance === null) {
      _instance = new BrowserStorage();
    }
    return _instance;
  }

  getUserSession() {
    const session = this.getSession('tpip_user_session');
    return session;
  }

  setUserSession(session) {
    this.addToSession('tpip_user_session', session);
  }

  getAdminClaimsSession() {
    const session = this.getSession('tpip_admin_claims_session');
    return session;
  }

  setAdminClaimSession(session) {
    this.addToSession('tpip_admin_claims_session', session);
  }

  getAdminClaims() {
    const session = this.getAdminClaimsSession();
    if (session == null) return null;

    return session;
  }

  getLoggedUser() {
    const session = this.getUserSession();
    if (session == null) return null;

    return session.loggedUser;
  }

  getFromStorage(key) {
    const { deviceStorage } = this;
    const localData = deviceStorage.localStorage().read(key);
    const sessionData = deviceStorage.sessionStorage().read(key);
    return localData ? localData : sessionData;
  }

  addToStorage(key, value) {
    const { deviceStorage } = this;
    deviceStorage.localStorage().save(key, value);
    deviceStorage.sessionStorage().save(key, value);
  }

  getSession(key) {
    const { deviceStorage } = this;
    return deviceStorage.sessionStorage().read(key);
  }

  addToSession(key, value) {
    const { deviceStorage } = this;
    deviceStorage.sessionStorage().save(key, value);
  }
}

export default BrowserStorage;
