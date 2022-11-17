let list = []

document.querySelector(".add-button").addEventListener("click", () => {
    let newName = document.querySelector(".paper input").value
    
    if (newName != "") {
        list.push(newName)

        document.querySelector(".paper").classList.add("to-bag")
    
        setTimeout(() => {
            document.querySelector(".paper input").value = ""
        }, 2000*0.8)

        setTimeout(() => {
            document.querySelector(".paper").classList.remove("to-bag")
        }, 3000)
    
    } else {
        document.querySelector(".paper").classList.add("paper-empty")

        setTimeout(() => {
            document.querySelector(".paper").classList.remove("paper-empty")
        }, 1000)
    }
    
    

   
})

document.querySelector(".bag").addEventListener("click", () => {
    let num = Math.floor(Math.random()*list.length)
    alert("And the chosen one is: "+list[num])

    list.splice(num,1)
})