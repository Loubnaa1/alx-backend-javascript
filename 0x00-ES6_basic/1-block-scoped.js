export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true; // Reassigning the outer scope variables
    task2 = false;
  }

  return [task, task2];
}
