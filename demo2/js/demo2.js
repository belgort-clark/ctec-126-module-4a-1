// demo2.js

// get all pics using attribute selectors
const pics = document.querySelectorAll('img[src$=".jpg"]')
// console.log(pics)
let i = 0
pics.forEach(function (element) {
    element.setAttribute('id', i)
    i++
    element.setAttribute('height', '50')
    element.setAttribute('alt', 'A pretty picture')
    const span = document.createElement('span')
    span.innerText = 'I like spam'
    element.before(span)
    element.addEventListener('click', function () {
        // alert('you click me')
        element.style.background = 'pink'
        // element.setAttribute('src', 'images/100-400x400.jpg')
        // element.remove()
        alert(element.getAttribute('id'))
    })
})

// iterate through each element in the array and change attributes
