// You have a list of student objects (name and grade).
const listStudent = [
  {
    name: 'Jomer',
    grade: 90,
  },
  {
    name: 'Abby',
    grade: 86,
  },
  {
    name: 'Lerma',
    grade: 91,
  },
  {
    name: 'Kimberly',
    grade: 87,
  },
  {
    name: 'Hanna',
    grade: 76,
  },
];

// empty array
const studentWithHonors = [];

// for of loop
for (let list of listStudent) {
  // destructuring each students detail in object
  const { name, grade } = list;

  // ternary
  const isStudent = grade >= 90 ? true : false;

  // spread with ternary
  const updateStudent = {
    ...list,
    honors: isStudent ? 'With Honors' : 'No Honors',
  };

  // push to studenWithHonoor empty array to add the value
  studentWithHonors.push(updateStudent);
}
// for of loop for final
for (const s of studentWithHonors) {
  console.log(`${s.name} - ${s.honors}`);
}
