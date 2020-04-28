'use strict'
//функции для проверки инпут

function isEmpty(firstName, lastName, tel) {
    
    if (firstName == '' || lastName == '' || tel == '') {
        alert('Заполните все поля!');
            return false
    } else return true
}

function testTel(tel) {
    
    let valid = /^\d{11}$/.test(tel)
    
    if (valid != true) {
        alert ('Телефон введен в неверном формате!')
            return false
    } else return true
}

function testTextFields(firstName, lastName) {

    let nameTest = /^[а-яА-ЯёЁa-zA-Z]+$/.test(firstName)

    if (nameTest === false) {
        alert('Введены некорректные символы')
        return false
    } else {
        let nameTest = /^[а-яА-ЯёЁa-zA-Z]+$/.test(lastName)

        if (nameTest === false) {
            alert('Введены некорректные символы')
            return false
        } else return true
    }
}