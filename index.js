const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const errorMessage = document.getElementById('error-message')
const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

function validateEmail() {
    if (inputEl.value.match(mailRegex)) {
        errorMessage.style.color = 'green'
        errorMessage.textContent = `Well done you're subscribed`
        inputEl.value = ''
        return true
    } else {
        inputEl.style.borderColor = 'red';
        errorMessage.textContent = `Please provide a valid email address`
        return false
    }
}


inputBtn.addEventListener('click', function() {
    validateEmail()
})

// inputEl.addEventListener('focus', () => {
//     inputEl.style.borderColor = 'red';
//     inputEl.style.color = 'green';
//   });