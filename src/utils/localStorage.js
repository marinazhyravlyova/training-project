const TOKEN_STORAGE = 'userToken';
const TOKEN_EXPIRATION_TIME = 1000 * 60 * 60 * 24; // 1 day

const validateUserToken = token => token.expired - Date.now() > 0;

export const saveUserToken = token => {
  const userToken = { token: token, expired: Date.now() + TOKEN_EXPIRATION_TIME };

  localStorage.setItem(TOKEN_STORAGE, JSON.stringify(userToken));
}

export const getUserToken = () => {
  const userToken = JSON.parse(localStorage.getItem(TOKEN_STORAGE));

  if (userToken && validateUserToken(userToken)) {
    return userToken.token;
  }
  return null;
}

export const clearUserToken = () => {
  localStorage.removeItem(TOKEN_STORAGE);
}
