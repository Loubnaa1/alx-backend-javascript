export default function updateUniqueItems(itemMap) {
	
  if (!(itemMap instanceof Map)) {
    throw new Error('Invalid input: Expected a Map');
  }
  for (const [item, quantity] of itemMap) {
    if (quantity === 1) {
      itemMap.set(item, 100);
    }
  }
}
