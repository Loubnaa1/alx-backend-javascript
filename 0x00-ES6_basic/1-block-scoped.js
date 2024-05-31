export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    task = true; // Reassigning the outer scope variables
    task2 = false;
  }

  return [task, task2];
}
