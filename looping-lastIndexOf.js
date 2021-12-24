function lastIndexOf(array, value) {
  if (array.length === 0) {
    return -1;
  }
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
