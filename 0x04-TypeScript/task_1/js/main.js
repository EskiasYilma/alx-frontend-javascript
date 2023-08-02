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
exports.default = TeacherImpl;
var StudentClass = /** @class */ (function () {
    function StudentClass() {
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
