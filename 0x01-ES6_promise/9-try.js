export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    const errMsg = error.message;
    queue.push(`Error: ${errMsg}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}
