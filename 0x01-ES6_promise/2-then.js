export default function handleResponseFromAPI(promise) {
  if (promise) {
    return promise
      .then((message) => {
        console.log('Got a response from the API');
        return message;
      })
      .catch((message) => new Error(message));
  }
  return new Error();
}
