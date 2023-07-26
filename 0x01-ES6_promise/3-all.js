import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((values) => {
    const result = `${values[0].body} ${values[1].firstName} ${values[1].lastName}`;
    console.log(result);
  }).catch(() => console.log('Signup system offline'));
}
