var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
};
var studentsList = [student1, student2];
var body = document.querySelector('body');
var table = document.createElement('table');
var row = document.createElement('tr');
row.innerHTML = "<tr><th>Firstname</th><th>Location</th></tr>";
table.appendChild(row);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    row.innerHTML = "<td>".concat(student.firstName, "</td><td>").concat(student.location, "</td>");
    table.appendChild(row);
});
body.appendChild(table);
