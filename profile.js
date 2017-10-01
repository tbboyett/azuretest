module.exports = function () {
    this.profile = {
        firstName: 'timothy',
        middleName: 'brian',
        lastName: 'boyett'
    };

    this.fullName = function () {
        return this.profile.firstName + ' ' + this.profile.middleName  + ' ' + this.profile.lastName;
    };

    this.getJSON = function () {
        return JSON.stringify(this.profile);
    };
};
