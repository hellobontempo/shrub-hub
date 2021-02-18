const port = 'http://localhost:3000'
const plantApi = new PlantApi(port)
const collectionApi = new CollectionApi(port)

const plantCollection = document.getElementById("plant-collection")
const navBar = document.getElementById("nav-bar")

const idBtn = document.querySelector("#id-plant-btn");
const plantFormContainer = document.querySelector(".container")

const plantGrid = document.getElementById("plant-grid")
const collectionBtn = document.getElementById("make-collection-button")
const collectionFormContainer = document.getElementById("collection-form-container")
const checkBoxPlantDiv = document.getElementById("checkbox-plant-list")
const collectionForm = document.getElementById("collection-form")

collectionForm.addEventListener("submit", handleSubmit)

let idPlant = false //hide and seek with ID plant form
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

let showCollectionForm = false //hide and seek with create collection form
collectionBtn.addEventListener("click", () => {
  showCollectionForm = !showCollectionForm;
  if (showCollectionForm) {
    collectionFormContainer.hidden = false
  } else {
    collectionFormContainer.hidden = true
  }
})

function handleSubmit(e){
  e.preventDefault()
  collectionApi.createCollection()
  e.target.reset()
}

// plantApi.getPlants()
plantApi.getCheckListPlants()


collectionApi.getCollections()