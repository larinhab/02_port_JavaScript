import * as postFetch from "./custom.js"
const { default: axios } = require("axios")

console.log('oi')

const getData = async() => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users", 
        
        {    // DEFININDO HEADERS 
            Headers: {
                "Content-Type": "application/json",
            }
        }
        )
        console.log(response)

        return response.data
    } catch (error) {
        console.log(error)
    }
}
 
getData()

const container = document.querySelector('#user-container')

const printData = async() => {
    const data = await getData()

    console.log(data)
    data.forEach((user) => {
        const div = document.createElement("div")
        const nameElement = document.createElement("h2")
        nameElement.textContent = user.nameElement

        div.appendChild(nameElement)

        const emailElement = document.createElement("p")
        emailElement.textContent = user.emailElement

        div.appendChild(emailElement)

        container.appendChild(div)
    })
}

printData()

// POST 

const form = document.querySelector("#post-form")
const titleInput = document.querySelector("#title")
const bodyInput = document.querySelector("#body")

form.addEventListener("submit", (e)=> {
    e.preventDefault()

    postFetch.post("https://jsonplaceholder.typicode.com/", {
       title: titleInput.value, 
       body: bodyInput.value, 
       userId: 1
    })
})