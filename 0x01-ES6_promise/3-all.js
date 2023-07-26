import { uploadPhoto, createUser } from './utils.js';

export default async function handleProfileSignup() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    const result = `${photo.body} ${user.firstName} ${user.lastName}`;
    console.log(result);
    return result;
  } catch (error) {
    console.log('Signup system offline:');
    throw error;
  }
}