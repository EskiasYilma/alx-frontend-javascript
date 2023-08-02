"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printTeacher = void 0;
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
exports.printTeacher = printTeacher;
var TeacherImpl = /** @class */ (function () {
    function TeacherImpl(firstName, lastName, fullTimeEmployee, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
    }
    return TeacherImpl;
}());
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
console.log((0, exports.printTeacher)("John", "Doe"));
