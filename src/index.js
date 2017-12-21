module.exports = function findRotationPoint(words) {
  const low = 0;
  const high = words.length;
  const endOfArray = words.length - 1;

  const findPivot = (arr, low, high) => {
    let mid = Math.floor((low + high) / 2);

    if (mid === high || mid === low) {
      if (mid === endOfArray) {
        return 0;
      }
      return mid + 1;
    }

    if (arr[low] > arr[mid]) {
      return findPivot(arr, low, mid);
    }

    return findPivot(arr, mid, high);
  }

  return findPivot(words, low, high);
}
