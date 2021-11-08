let h2 = document.querySelector("h2")
console.log(h2.innerText)
h2.innerText ="Exercices 1"
console.log(h2.innerText)
let p = h2.nextElementSibling
p.className = "container"
p.innerText = "Voici mon para vide que j'ai rempli"
console.log(p.innerText)

let section = document.querySelectorAll('section')[0]
console.log(section.id)
let exo5 = document.querySelectorAll("h1")[0]
console.log(exo5.className)
console.log(exo5.getAttribute('class'))
let exo6 = document.querySelectorAll('h1')

exo6.forEach(element => {
        console.log(element.className)
});

let exo7 = document.querySelectorAll('input')[0]
console.log(exo7.attributes)

let exo8 = exo7.getAttribute('type')
console.log(exo8)

let exo9 = document.querySelector('#inputPassword3')
exo9.setAttribute('class','password')
console.log(exo9.className)

exo7.setAttribute('type','color')
console.log(exo7.type)