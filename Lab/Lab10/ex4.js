var Person = (function () {
    function Person(_firstName) {
        if (_firstName === void 0) { _firstName = ""; }
        this._firstName = _firstName;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (val) {
            this._firstName = val;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.firstName = "Asaad";
console.log(person.firstName);
