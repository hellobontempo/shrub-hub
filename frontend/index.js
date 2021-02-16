const plantCollection = document.getElementById("plant-collection")
const plantGrid = document.getElementById("plant-grid")
const idBtn = document.querySelector("#id-plant-btn");
const plantFormContainer = document.querySelector(".container")

let idPlant = false

idBtn.addEventListener("click", () => {
    // hide & seek with the form
    idPlant = !idPlant;
    if (idPlant) {
      idBtn.innerText = "Nevermind...(Hide Form)"
      plantFormContainer.style.display = "block";
    } else {
      idBtn.innerText = "Identify a plant!";
      plantFormContainer.style.display = "none";
    }
  });

