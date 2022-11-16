let list = []

document.querySelector(".add-button").addEventListener("click", () => {
    let newName = document.querySelector(".paper input").value
    list.push(newName)
    console.log(list)
    document.querySelector(".paper input").value = ""
})

document.querySelector(".bag").addEventListener("click", () => {
    let num = Math.floor(Math.random()*list.length)
    console.log("And the chosen one is: "+list[num])
    return list[num]
})