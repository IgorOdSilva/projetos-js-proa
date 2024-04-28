const btnEl = document.getElementById("btn")
const contentEl = document.getElementById("quote")
const quoteAuthorEl = document.getElementById("author")
const apiURL = "https://api.quotable.io/random"

function updateLoadingUI() {
  btnEl.innerText = "Loading"
  btnEl.disabled = true
  contentEl.innerText = "Updating..."
  quoteAuthorEl.innerText = "Updating..."
}

async function handleSuccessResponse(data) {
  contentEl.innerText = data.content
  quoteAuthorEl.innerText = "~ " + data.author
  btnEl.innerText = "Get a Quote"
  btnEl.disabled = false
}

function handleErrorResponse() {
  contentEl.innerText = "Sorry, an error occurred!!"
  quoteAuthorEl.innerText = "Try again"
  btnEl.innerText = "Get a Quote"
  btnEl.disabled = false
}

async function getQuote() {
  try {
    updateLoadingUI()

    const response = await fetch(apiURL)
    const data = await response.json()
    
    handleSuccessResponse(data)
  } catch (error) {
    handleErrorResponse()
  }
}

btnEl.addEventListener("click", getQuote)