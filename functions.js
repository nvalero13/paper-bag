addEventListener("load", (e) => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.querySelector("body").style.height = window.innerHeight+"px";
});

window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

let list = [];

document.querySelector(".add-button").addEventListener("click", addName);
document.querySelector(".paper input").addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    addName()
  }
})

function addName() {
  let newName = document.querySelector(".paper input").value;
  document.querySelector(".paper input").setAttribute("disabled","")
  if (newName != "") {
    list.push(newName);

    document.querySelector(".paper").classList.add("to-bag");

    setTimeout(() => {
      document.querySelector(".paper input").value = "";
      document.querySelector(".paper input").removeAttribute("disabled")
    }, 1500 * 0.7);

    setTimeout(() => {
      document.querySelector(".paper").classList.remove("to-bag");
    }, 1500);
  } else {
    document.querySelector(".paper").classList.add("nope");

    setTimeout(() => {
      document.querySelector(".paper").classList.remove("nope");
    }, 1000);
  }
}

document.querySelector(".bag").addEventListener("click", () => {
  document.querySelector(".winner-text").innerHTML = ""
  if (list.length > 1) {
    // Shuffle array and get the first one
    let num = Math.floor(Math.random() * list.length);

    document.querySelector(".winner").innerHTML = list[num];
    // Esconde add-div
    document.querySelector(".add-div").classList.add("scale-0");
    document.querySelector(".proceed-text").classList.add("scale-0");
    // Esconde bag-div
    document.querySelector(".bag").classList.add("translate-down");
    // Muestra sorting-div y animar
    setTimeout(() => {
      let count = 0;
      const intervalID = setInterval(() => {
        document.querySelector(".sorting-div h2 span").innerHTML = "";
        for (let i = 0; i <= count; i++) {
          document.querySelector(".sorting-div h2 span").innerHTML += ".";
        }
        count++;
        count > 2 ? (count = 0) : count;
      }, 1000);

      setTimeout(() => {
        document.querySelector(".sorting-div").style.display = "flex";
      }, 300);
      setTimeout(() => {
        document.querySelector(".sorting-div").style.transform = "scale(1)";
      }, 500);
      const sortingID = setTimeout(() => {
        document.querySelector(".sorting-div img").classList.add("sorting");
      }, 600);

      list.splice(num, 1);

      setTimeout(() => {
        clearInterval(intervalID);
        clearInterval(sortingID);

        document.querySelector(".sorting-div").style.transform = "scale(0)";
        setTimeout(() => {
          document.querySelector(".sorting-div").style.display = "none";
        }, 300);
      }, 3200);
      setTimeout(() => {
        document.querySelector(".overlay").style.opacity = "1";
        document.querySelector(".overlay").style.pointerEvents = "all"
        setTimeout(() => {
          let i = 0;
          const winnerString = "And the winner is...";
          const winnerTextID = setInterval(() => {
            document.querySelector(".winner-text").innerHTML =
              winnerString.slice(0, i);
            i++;

            if (i > winnerString.length) {
              clearInterval(winnerTextID);
              document.querySelector(".next-paper").style.opacity = "0"
              document.querySelector(".new-draw").style.opacity = "0"
              setTimeout(() => document.querySelector(".result").style.transform = "scale(1)", 200)
              setTimeout(() => {
                document.querySelector(".next-paper").style.transform = "scale(1)" 
                document.querySelector(".next-paper").style.opacity = "1"
              }, 1500)
              setTimeout(() => {
                document.querySelector(".new-draw").style.transform = "scale(1)"
                document.querySelector(".new-draw").style.opacity = "1"
              }, 1800)
            }
          }, 70);
        }, 500);
      }, 3500);
    }, 1000);
  } else {
    document.querySelector(".bag").classList.add("nope");

    setTimeout(() => {
      document.querySelector(".bag").classList.remove("nope");
    }, 1000);
  }
});

let nextCount = -1
// NEXT PAPER WINNER
document.querySelector(".next-paper").addEventListener("click", () =>  {
  document.querySelector(".next-paper").setAttribute("disabled","")
  nextCount++
  let winnerNum = ["2nd","3th","4th","5th","6th","7th","8th","next"]
 
  setTimeout(() => document.querySelector(".winner-text").innerHTML = `And the ${list.length == 1 ? "last" : winnerNum[nextCount]} winner is...`, 100)
  
  document.querySelector(".winner-paper").style.transform = "scale(0) translateX(-100px)"

  
 setTimeout(() => {
  let num = Math.floor(Math.random() * list.length);
  document.querySelector(".winner").innerHTML = list[num];
  list.splice(num, 1);
 }, 300)

  setTimeout(() => document.querySelector(".winner-paper").style.transform = "scale(0) translateX(50px)", 500)
  

  setTimeout(() => {
    document.querySelector(".winner-paper").style.transform = "scale(1) translateX(0px)"
    list.length == 0 ? "" : document.querySelector(".next-paper").removeAttribute("disabled")
  }, 800)
})


// NEW DRAW 
document.querySelector(".new-draw").addEventListener("click", () =>  {
  location.reload()
})
