function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;

  return name + " is " + age + " years old.";
}
console.log(ageCalculator("Alex", 1989, 2021));
