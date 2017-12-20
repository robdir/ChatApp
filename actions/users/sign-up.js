import API from '../../lib/api';

const api = new API();
const users = api.service('users');

export default (user) => {
  console.log('creating user...');
  users.create(user)
    .then((result) => {
      console.log('user created', result);
    })
    .catch((error) => {
      console.error('Oh noes, something went wrong', error);
    });
}
