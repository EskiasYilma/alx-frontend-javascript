export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const data = 'test';
    if (data) {
      resolve('Success Data');
    } else {
      reject(new Error('No data available'));
    }
  });
}
