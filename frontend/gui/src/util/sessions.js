import { COOKIE_FLAG_KEY } from './constants'


class SessionHandler {
    static setAuthInStorage() {
        if (!localStorage.getItem(COOKIE_FLAG_KEY)) {
            localStorage.setItem(COOKIE_FLAG_KEY, 'value');
        }
    }

    static clearAuthInStorage() {
        if (localStorage.getItem(COOKIE_FLAG_KEY)) {
            localStorage.removeItem(COOKIE_FLAG_KEY);
        }
    }

    static isAuthInStorage() {
        if (localStorage.getItem(COOKIE_FLAG_KEY)) {
            return true
        }
        return false
    }
}

export default SessionHandler