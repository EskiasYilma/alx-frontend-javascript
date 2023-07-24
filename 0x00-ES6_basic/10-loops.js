export default function appendToEachArrayValue(array, appendString) {
  const MyArray = [];

  for (const idx of array) {
    MyArray.push(appendString + idx);
  }

  return MyArray;
}
