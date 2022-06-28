const notionLeft = "5c71cee970d8456ea6c69977cc126d82"
const notionCenter = "509976f2aeb34b438ac4f28d4e31b3ce"
const notionRight = "79a0e520008547b1a2a9206346d01be1"

fetch("https://potion-api.now.sh/html?id=" + notionLeft)
  .then(res => res.text())
  .then(text => {
    document.querySelector("left").innerHTML = text
})

fetch("https://potion-api.now.sh/html?id=" + notionRight)
  .then(res => res.text())
  .then(text => {
    document.querySelector("right").innerHTML = text
})

fetch("https://potion-api.now.sh/html?id=" + notionCenter)
  .then(res => res.text())
  .then(text => {
    document.querySelector("cent").innerHTML = text
})