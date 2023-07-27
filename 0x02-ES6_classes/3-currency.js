export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Setters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Getters
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // Custom Method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
