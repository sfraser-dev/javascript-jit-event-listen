const title = document.querySelector('#title')
const btn = document.querySelector('#btn')
const deleteBtn = document.querySelector('#deleteBtn')

// console.log(title)
// console.log(btn)

// element.addEventListener("event type", () => {some functionality})

// Example to console log event info on click
// btn.addEventListener("click", (e) => {
//     console.log(e)
// })

// We can delcare functions outside of event listeners and call them within
let greeting = () => {
    console.log("Hello, thanks for clicking the button")
}

// btn.addEventListener("click", () => {
//     greeting()
// })

title.addEventListener("click", () => {
    console.log("Thank you for clicking the H1 element!")
})

// Mouseover Event
title.addEventListener("mouseover", () => {
    title.style.color = "Orange"
})

title.addEventListener("mouseout", () => {
    title.style.color = "Black"
})

// Button that adds an element to the document

btn.addEventListener("click", () => {
    let newElement = document.createElement('h2')
    newElement.innerText = "I am a new element!"
    document.body.appendChild(newElement)
})


// Button that deletes an element from the document
// deleteBtn.addEventListener("click", () => {
//     newElement.remove()
// })

deleteBtn.addEventListener("click", () => {
    document.body.lastChild.remove()
})
