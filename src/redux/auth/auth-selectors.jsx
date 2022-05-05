const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getRefetchingPage = state => state.auth.isRefetchingPage;

const authSelectors = { getIsLoggedIn, getUsername, getRefetchingPage };

export default authSelectors;
