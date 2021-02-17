const idBtn = document.querySelector("#id-plant-btn");
const plantFormContainer = document.querySelector(".container")
const port = 'http://localhost:3000'
const plantApi = new PlantApi(port)
const plantGrid = document.getElementById("plant-grid")

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

plantApi.getPlants()