const isAuthenticated = state => {
  return state.auth.loggedIn;
};

const loggedInUser = state => {
  return state.auth.user;
};
export default {
  isAuthenticated,
  loggedInUser
};
