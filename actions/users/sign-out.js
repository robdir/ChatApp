import API from '../../lib/api';

export const USER_SIGNED_OUT = 'USER_SIGNED_OUT';

const api = new API();
const users = api.service('users');

export default (user) => {
  resturn (dispatch) => {
    api.signOut();
    dispatch(signeOutUser());
  }
}

const signedOutUser = () => {
  return {
    type: USER_SIGNED_OUT,
  };
}
