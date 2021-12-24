function range(start, end, step) {
  const arrayPattern = [];
  if (
    start === undefined ||
    end === undefined ||
    step === undefined ||
    start > end ||
    step < 0
  ) {
    return arrayPattern;
  } else {
    for (let i = start; i <= end; i += step) {
      arrayPattern.push(i);
    }
  }
  return arrayPattern;
}
