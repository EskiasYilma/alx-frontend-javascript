import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photoupl = await uploadPhoto();
  const usercr = await createUser();
  const result = {
    photo: photoupl,
    user: usercr,
  };
  return result;
}
