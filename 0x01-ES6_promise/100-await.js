import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoupl = await uploadPhoto();
    const usercr = await createUser();
    const result = {
      photo: photoupl,
      user: usercr,
    };
    return result;
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
