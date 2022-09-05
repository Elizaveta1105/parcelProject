import { throttle } from 'lodash'
const emailInput = document.querySelector("[name='email']")
const messageInput = document.querySelector("[name='message']")
const form = document.querySelector(".feedback-form")
const submitButton = document.querySelector("[type='submit']")
const FEEDBACK_STORAGE = "feedback-form-state"

form.addEventListener("input", throttle(() => {
    const data = {
        email: emailInput.value,
        message: messageInput.value
    }

    localStorage.setItem(FEEDBACK_STORAGE, JSON.stringify(data))
}), 500)

if(localStorage.getItem(FEEDBACK_STORAGE)) {
    let parsedData = JSON.parse(localStorage.getItem(FEEDBACK_STORAGE))

    emailInput.value = parsedData.email
    messageInput.value = parsedData.message
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let parsedData = JSON.parse(localStorage.getItem(FEEDBACK_STORAGE))

    console.log(parsedData)
    localStorage.removeItem(FEEDBACK_STORAGE)
    form.reset()
})
