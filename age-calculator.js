function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;

  return name + " is " + age + " years old.";
}
console.log(ageCalculator("Taylor Swift", 1989, 2021));
