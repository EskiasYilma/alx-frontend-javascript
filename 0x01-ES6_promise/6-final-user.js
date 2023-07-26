import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([Promise.resolve(signUpUser(firstName, lastName)), Promise.resolve(uploadPhoto(fileName))]).then((values) => {
    console.log(values);
  }).catch((error) => console.log(error));
}
