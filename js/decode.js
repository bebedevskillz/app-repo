'use strict'

// document.addEventListener('DOMContentLoaded', function () {
    
//     let url = getAllUrlParams(window.location.href) // obj {refID: "W1sibiIsInZpdGFsaXkiXSxbImwiLCJzbWlybm92Il0sWyJwIiwiODk5OTc3NzMzMjIiXV0%3D"}
//     let refIDDecodedArray = Base64.decode(decodeURIComponent(url.refID))
//     let mapArray = new Map(JSON.parse(refIDDecodedArray))
    
//     for (let pair of mapArray) {
//         if (pair[0] == "n") document.querySelector('#fName').innerText = pair[1]
//         if (pair[0] == "l") document.querySelector('#lName').innerText = pair[1]     
//         if (pair[0] == "p") document.querySelector('#phoneNumber').innerText = pair[1]  
//     } 
// })

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