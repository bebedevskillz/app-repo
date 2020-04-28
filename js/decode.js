'use strict'

let testLink = document.querySelector('#fullUri')
document.querySelector('#decodeBtn').onclick = () => decodeURI(testLink.value)

function decodeURI(link) {
    
    let url = getAllUrlParams(link)
    let refIDDecodedString = Base64.decode(decodeURIComponent(url.refID))
    let mapArray = new Map(JSON.parse(refIDDecodedString))
    
        for (let pair of mapArray) {
            if (pair[0] == "n") document.querySelector('#fName').innerText = pair[1]
            if (pair[0] == "l") document.querySelector('#lName').innerText = pair[1]
            if (pair[0] == "p") document.querySelector('#phoneNumber').innerText = pair[1]
        } 
}