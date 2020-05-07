'use strict'
//функции для проверки инпут филдов

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

function symbolsChecker(firstName, lastName) {

    let nameTest = /^[а-яА-ЯёЁa-zA-Z]+$/.test(firstName)

    if (nameTest === false) {
        alert('Введены некорректные символы в поле "Имя"')
        return false
    } else {
        let nameTest = /^[а-яА-ЯёЁa-zA-Z]+$/.test(lastName)

        if (nameTest === false) {
            alert('Введены некорректные символы в поле "Фамилия"')
            return false
        } else return true
    }
}

function nameLengthChecker(firstName, lastName) {
	
    if (firstName.length < 2) {
        alert ('Вы ввели слишком короткое имя')
        return false
    } else if (lastName.length < 2) {
        alert ('Вы ввели слишком короткую фамилию')
        return false
    } else return true
}