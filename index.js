const myForm = document.getElementById('myForm')
const itemInput = document.getElementById('item')
const itemsList = document.getElementById('itemsList')

myForm.addEventListener("submit", handleItemInput)

function handleItemInput(event){
    event.preventDefault()
    const item = itemInput.value

    const newLiItem = document.createElement('li')
    newLiItem.innerHTML = item
    itemsList.appendChild(newLiItem)
}