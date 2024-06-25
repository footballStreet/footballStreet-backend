class User {
    constructor(username, firstname, lastname, surname, birthday, phone, email, password) {
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.surname = surname;
        this.birthday = birthday;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.quest = false;
    };

    getUsername() {
        return this.username;
    };

    getFirstName() {
        return this.firstname;
    };

    getLastName() {
        return this.lastname;
    };

    getSurname() {
        return this.surname;
    };

    getBirthday() {
        return this.birthday;
    };

    getPhone() {
        return this.phone;
    };

    getEmail() {
        return this.email;
    };

    getPassword() {
        return this.password;
    };

    isGuest() {
        return this.quest;
    };
};

export default User;