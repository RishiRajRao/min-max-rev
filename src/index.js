function minMax(arr) {
  let min = Number.MAX_VALUE,
    max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    min = Math.min(min, arr[i]);
  }
  console.log("==res", max, min);
}

minMax([4, 1, 8, 9, 13, 12, 14, 7]);
