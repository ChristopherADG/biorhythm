/* API ROUTES */
export const API_URL = 'http://localhost:8000';

export const LOGIN_USER_API_ROUTE = API_URL + '/api/users/login/';
export const LOGOUT_USER_API_ROUTE = API_URL + '/api/users/logout/';
export const CREATE_USER_API_ROUTE = API_URL + '/api/users/create/';
export const CALC_BIO_API_ROUTE = API_URL + '/api/biocalc';
export const USER_API_GET = API_URL + '/api/users/';
export const IMAGE_API_ROUTE = API_URL + '/api/image/'
export const CREATE_EVENT = API_URL + '/api/events/create/';
export const GET_EVENTS = API_URL + '/api/events/availableEventes/';
export const GET_MY_EVENTS = API_URL + '/api/events/myevents/';
export const GET_ORGANIZED_EVENTS = API_URL + '/api/events/organized/';
export const GET_JOINED_EVENTS = API_URL + '/api/events/joined/';
export const JOIN_EVENT = API_URL + '/api/events/join/';
export const EVENT_API = API_URL + '/api/events/';


/* KEYWORDS */
export const COOKIE_FLAG_KEY = 'bio'

/* IN APP ROUTES  */

export const LOGIN_LINK = '/login'
export const LOGOUT_LINK = '/logout'
export const SIGNUP_LINK = '/signup'
export const DASHBOARD_LINK = '/dashboard'
export const PROFILE_LINK = '/profile'
export const EVENTS_LINK = '/events'