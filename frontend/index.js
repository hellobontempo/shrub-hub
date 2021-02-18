const port = 'http://localhost:3000'
const plantApi = new PlantApi(port)
const collectionApi = new CollectionApi(port)

// const plantCollection = document.getElementById("plant-collection")  moved to collection class?
const navBar = document.getElementById("nav-bar")
const collectionBtnDiv = document.getElementById("collection-buttons")

const addPlantShowFormBtn = document.querySelector("#add-plant-form-btn");
const plantFormContainer = document.querySelector(".container")

const plantGrid = document.getElementById("plant-grid")
const collectionBtn = document.getElementById("make-collection-button")
const collectionFormContainer = document.getElementById("collection-form-container")
const checkBoxPlantDiv = document.getElementById("checkbox-plant-list")
const collectionForm = document.getElementById("collection-form")
const addPlantForm = document.getElementById("add-plant-form")

addPlantForm.addEventListener("submit", handleNewPlantSubmit)
collectionForm.addEventListener("submit", handleSubmit)

let addPlant = false //hide and seek with ID plant form
addPlantShowFormBtn.addEventListener("click", () => {
    // hide & seek with the form
    addPlant = !addPlant;
    if (addPlant) {
      addPlantShowFormBtn.innerText = "Nevermind...(Hide Form)"
      plantFormContainer.style.display = "block";
    } else {
      addPlantShowFormBtn.innerText = "Add a plant!";
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

const plantCollectionButton = document.getElementById("plant-collection-btn")


let displayPlants = false
plantCollectionButton.addEventListener('click', () => { //hide and seek plant collection
    displayPlants = !displayPlants;
    if (displayPlants) {
      collectionBtnDiv.hidden = false;
      resultDiv.hidden = true
    } else {
      collectionBtnDiv.hidden = true;
      resultDiv.hidden = false
    }
  });



function handleSubmit(e){
  e.preventDefault()
  collectionApi.createCollection()
  e.target.reset()
}

function handleNewPlantSubmit(e){
  e.preventDefault()
  plantApi.createPlant()
  e.target.reset()
}

// plantApi.getPlants()
plantApi.getCheckListPlants()
collectionApi.getCollections()
