class Students {
  constructor(id, firstName, location) {
    this.id = id;
    this.firstName = firstName;
    this.location = location;
  }
}

export default function getListStudents() {
  const obj1 = new Students(1, 'Guillaume', 'San Francisco');
  const obj2 = new Students(2, 'James', 'Columbia');
  const obj3 = new Students(5, 'Serena', 'San Francisco');
  return [{ ...obj1 }, { ...obj2 }, { ...obj3 }];
}
