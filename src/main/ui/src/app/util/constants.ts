const API = 'http://localhost:8080';

/**
 * Paths for the api calls.
 */
const PATHS = {
  LOGIN: API + '/account/login',
  LOGOUT: API + 'logout',
  REGISTER: API + '/account/register'
};

// Export constants
export let constants = {
  PATHS
};
