export default function iterateThroughObject(reportWithIterator) {
  const emp = [];
  for (const idx of reportWithIterator) {
    emp.push(idx);
  }

  return emp.join(' | ');
}
