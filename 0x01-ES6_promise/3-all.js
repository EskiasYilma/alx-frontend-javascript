import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    const result = `${photo.body} ${user.firstName} ${user.lastName}`;
    return console.log(result);
  } catch (error) {
    return console.log('Signup system offline:');
  }
}
