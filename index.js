const form = document.getElementById('form')
const emailEl = document.getElementById('email-el')
const validation = document.getElementById('validation')
const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

//FUNZIONA
// form.addEventListener('submit', function(e) {
//     e.preventDefault()

//     if(!validateEmail(emailEl.value)) {
//         validation.textContent = 'Please provide a valid email address'
//         validation.classList.add('error')
//         validation.classList.remove('success')
//     } else {
//         validation.classList.add('success')
//         validation.classList.remove('error')
//         validation.textContent = 'Email submitted'
//     }
// })

// function validateEmail(email) {
//     return mailRegex.test(email)
// }

//UPGRADE
form.addEventListener('submit', function(e) {
    e.preventDefault()

    if(!validateEmail(emailEl.value)) {
        validation.classList.remove('hidden')
        validation.textContent = 'Please provide a valid email address'
        validation.classList.add('error')
        emailEl.classList.add('error-bd')
        emailEl.classList.remove('success-bd')
        validation.classList.remove('success')
    } else {
        validation.classList.remove('hidden')
        validation.textContent = 'Email submitted'
        validation.classList.add('success')
        emailEl.classList.add('success-bd')
        emailEl.classList.remove('error-bd')
        validation.classList.remove('error')
    }
})

function validateEmail(email) {
    return mailRegex.test(email)
}
