let list = [];

document.querySelector(".add-button").addEventListener("click", () => {
  let newName = document.querySelector(".paper input").value;

  if (newName != "") {
    list.push(newName);

    document.querySelector(".paper").classList.add("to-bag");

    setTimeout(() => {
      document.querySelector(".paper input").value = "";
    }, 2000 * 0.8);

    setTimeout(() => {
      document.querySelector(".paper").classList.remove("to-bag");
    }, 3000);
  } else {
    document.querySelector(".paper").classList.add("nope");

    setTimeout(() => {
      document.querySelector(".paper").classList.remove("nope");
    }, 1000);
  }
});

document.querySelector(".bag").addEventListener("click", () => {
  if (list.length > 1) {
    let num = Math.floor(Math.random() * list.length);

    document.querySelector(".winner").innerHTML = list[num];
    // Esconde add-div
    document.querySelector(".add-div").classList.add("scale-0");
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
      }, 5000);
      setTimeout(() => {
        document.querySelector(".overlay").style.opacity = "1";
        setTimeout(() => {
          let i = 0;
          const winnerString = "And the winner is...";
          const winnerTextID = setInterval(() => {
            document.querySelector(".winner-text").innerHTML =
              winnerString.slice(0, i);
            i++;

            if (i > winnerString.length) {
              clearInterval(winnerTextID);
              setTimeout(() => document.querySelector(".result").style.transform = "scale(1)", 100)
            }
          }, 100);
        }, 500);
      }, 5500);
    }, 1000);
  } else {
    document.querySelector(".bag").classList.add("nope");

    setTimeout(() => {
      document.querySelector(".bag").classList.remove("nope");
    }, 1000);
  }
});
