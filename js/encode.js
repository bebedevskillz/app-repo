'use strict'

document.addEventListener('DOMContentLoaded', () => {

    let getButton = document.querySelector('#getLink')     
    let getResult = document.querySelector('#fullUri')  		
    let resultDiv = document.querySelector('.display')

    function getInputs() {

        // получаем данные из инпут филдов
        let firstName = document.querySelector('#first-name').value
        let lastName = document.querySelector('#last-name').value
        let tel = document.querySelector('#phone').value

        // блок тестирование ограничений ввода
        let testEmptyFields = isEmpty(firstName, lastName, tel)
        let testTextInput = symbolsChecker(firstName, lastName)
        let testNameLength = nameLengthChecker(firstName, lastName)
        let testValidNumber = testTel(tel)

        // упаковка данных в json строку, если все проверки успешны
        if (testEmptyFields && testTextInput && testNameLength && testValidNumber === true) {

            let infoArray = new Map([
                ['n', firstName],
                ['l', lastName],
                ['p', tel]
            ])

            let jsonStr = JSON.stringify([...infoArray])
            return jsonStr
        }
    }

    let encodedUri

    function encodeRefID(a) {

        // переводим данные в формат строки, энкодим и склеиваем готовую ссылку
        let data = a.toString()
        // делаем base64 энкод данных и энкодим спецсимволы в полученной строке ещё раз, чтобы не было знаков =, ?, & и т.д.
        let refID = encodeURIComponent(Base64.encode(data))
        encodedUri = `${window.location.href}?refID=${refID}`
    }

    // старт
    getButton.onclick = () => {
        
        let inputData = getInputs()
        encodeRefID(inputData)

        resultDiv.style.display = 'block'
        getResult.value = encodedUri
    }

    (function clipBoardCopy() {
        // функция копирования в буфер обмена, библиотека clipboard.js
		new ClipboardJS('#copyBtn')
    })()
})