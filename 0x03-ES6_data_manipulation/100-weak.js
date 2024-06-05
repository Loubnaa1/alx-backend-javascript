/* eslint-disable */
export const weakMap = new WeakMap();
export function queryAPI(temp) {
  let Sum = weakMap.get(temp) || 0;
  Sum++;
  if (Sum >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(temp, Sum);
}
