interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'loubna',
  lastName: 'swapaw',
  age: 27,
  location: 'morocco'
}

const student2: Student = {
  firstName: 'Sara',
  lastName: 'willson',
  age: 22,
  location: 'US'
}

const studentList: Array<Student> = [student1, student2];


const table: HTMLTableElement = document.createElement('table');
const tableHead: HTMLTableSectionElement = table.createTHead();
const headRow: HTMLTableRowElement = tableHead.insertRow();
const headRowCell1: HTMLTableCellElement = headRow.insertCell();
headRowCell1.textContent = "First Name";
const headRowCell2: HTMLTableCellElement = headRow.insertCell();
headRowCell2.textContent = "Location";
const tableBody: HTMLTableSectionElement = table.createTBody();
array.forEach(student => {
  const bodyRow: HTMLTableRowElement = tableBody.insertRow();
  const firstNameCell: HTMLTableCellElement = bodyRow.insertCell();
  firstNameCell.textContent = student.firstName;
  const locationCell: HTMLTableCellElement = bodyRow.insertCell();
  locationCell.textContent = student.location;
});
document.body.appendChild(table);
