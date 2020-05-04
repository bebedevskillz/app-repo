'use strict'

document.addEventListener('DOMContentLoaded', () => {

    let getButton = document.querySelector('#getLink')		       
    let getResult = document.querySelector('#fullUri')         		
    let resultDiv = document.querySelector('.display')        

    function getInputs() {

        let firstName = document.getElementById('first-name').value
        let lastName = document.getElementById('last-name').value
        let tel = document.getElementById('phone').value

        let testEmpty = isEmpty(firstName, lastName, tel)
        let testTextInputs = testTextFields(firstName, lastName)
        let testValidNumber = testTel(tel)
      
        if (testEmpty && testTextInputs && testValidNumber === true) {

            let infoArray = new Map([ 
                ['n', firstName],
                ['l', lastName],
                ['p', tel]
            ])

            let jsonStr = JSON.stringify([...infoArray]) // или JSON.stringify(Array.from(arr)) или JSON.stringify( Array.from( arr.entries() ) )
            console.log(`json: ${jsonStr}`)
            return jsonStr
        }
    }

    let encodedUri

    function encodeRefID(a) {

        let data = a.toString() 		                        
        let refID = encodeURIComponent(Base64.encode(data))    // делаем base64 энкод данных и энкодим спецсимволы в полученной строке ещё раз, чтобы не было знаков =, ?, & и т.д.
        encodedUri = `${window.location.href}?refID=${refID}`
    }
    
    getButton.onclick = () => { // старт
        
        let inputData = getInputs()
        encodeRefID(inputData)

        resultDiv.style.display = 'block'
        getResult.value = encodedUri
    }

    (function clipBoardCopy() { 		
		new ClipboardJS('#copyBtn')
    })()
})