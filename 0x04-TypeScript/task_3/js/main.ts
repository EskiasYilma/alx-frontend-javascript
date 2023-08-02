export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher : printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}

export default class TeacherImpl implements Teacher {
  constructor(
    public firstName: string,
    public lastName: string,
    public fullTimeEmployee: boolean,
    public location: string
  ) {}
  [key: string]: any;
  yearsOfExperience: number;
}
