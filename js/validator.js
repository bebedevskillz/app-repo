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

