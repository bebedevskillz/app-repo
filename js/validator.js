'use strict'
//собственные валидирующие функции инпут филдов

function isEmpty(firstName, lastName, tel) {
    // проверка на пустые строки
    if (firstName == '' || lastName == '' || tel == '') {
        alert('Заполните все поля!')
        return false
    } else return true
}

function testTel(tel) {
    // простая проверка по установленному формату номера
    let valid = /^\d{11}$/.test(tel)
    
    if (valid != true) {
        alert ('Телефон введен в неверном формате, см. подсказку!')
            return false
    } else return true
}

function symbolsChecker(firstName, lastName) {
    // проверка ограничений на вводимые символы
    let nameTest = /^[а-яА-ЯёЁa-zA-Z]+$/.test(firstName)

    if (nameTest === false) {
        alert('Введены некорректные символы в поле "имя"')
        return false
    } else {
        let nameTest = /^[а-яА-ЯёЁa-zA-Z]+$/.test(lastName)

        if (nameTest === false) {
            alert('Введены некорректные символы в поле "фамилия"')
            return false
        } else return true
    }
}

function nameLengthChecker(firstName, lastName) {
    // проверка минимальной длины вводимой строки
    if (firstName.length < 2) {
        alert ('Вы ввели слишком короткое имя')
        return false
    } else if (lastName.length < 2) {
        alert ('Вы ввели слишком короткую фамилию')
        return false
    } else return true
}