const port = 'http://localhost:3000'
const plantApi = new PlantApi(port)
const collectionApi = new CollectionApi(port)

// const plantCollection = document.getElementById("plant-collection")  moved to collection class?
//navigation buttons: 
const navBar = document.getElementById("nav-bar")
const plantCollectionButton = document.getElementById("plant-collection-btn")
const collectionBtn = document.getElementById("make-collection-button")
const addPlantShowFormBtn = document.querySelector("#add-plant-form-btn");

const plantFormContainer = document.querySelector("#create-a-plant-form")
const addPlantForm = document.getElementById("add-plant-form")

const collectionFormContainer = document.getElementById("collection-form-container")
const collectionForm = document.getElementById("collection-form")

const checkBoxPlantDiv = document.getElementById("checkbox-plant-list")
const collectionBtnDiv = document.getElementById("collection-buttons")
const plantGrid = document.getElementById("plant-grid")

addPlantForm.addEventListener("submit", handleNewPlantSubmit)
collectionForm.addEventListener("submit", handleSubmit)

let addPlant = false //hide and seek with add plant form
addPlantShowFormBtn.addEventListener("click", () => {
    // hide & seek with the form
    addPlant = !addPlant;
    if (addPlant) {
      addPlantShowFormBtn.innerText = "Nevermind..."
      plantFormContainer.style.display = "block";
      plantCollectionButton.disabled = true
      collectionBtn.disabled = true
    } else {
      addPlantShowFormBtn.innerText = "Add a plant!";
      plantFormContainer.style.display = "none";
      plantCollectionButton.disabled = false
      collectionBtn.disabled = false
    }
  });

let showCollectionForm = false //hide and seek with create collection form

collectionBtn.addEventListener("click", () => {
  showCollectionForm = !showCollectionForm;
  if (showCollectionForm) {
    collectionFormContainer.hidden = false
    collectionBtn.innerText = "Hide Form"
  }else {
    collectionFormContainer.hidden = true;
    collectionBtn.innerText = "Make A Collection"
  }
})

let displayPlants = false
plantCollectionButton.addEventListener('click', () => { //hide and seek plant collection
    displayPlants = !displayPlants;
    if (displayPlants) {
      collectionBtnDiv.hidden = false;
      addPlantShowFormBtn.disabled = true
      collectionBtn.disabled = true
      plantCollectionButton.innerText = "Hide Collections"
    } else {
      collectionBtnDiv.hidden = true;
      addPlantShowFormBtn.disabled = false
      collectionBtn.disabled = false
      plantCollectionButton.innerText = "View Collections"
    }
  });



function handleSubmit(e){
  e.preventDefault()
  collectionApi.createCollection()
  e.target.reset()
  collectionFormContainer.hidden = true
}

function handleNewPlantSubmit(e){
  e.preventDefault()
  plantApi.createPlant()
  e.target.reset()
  
  addPlantShowFormBtn.innerText = "Add a plant!";
  plantFormContainer.style.display = "none";
  plantCollectionButton.disabled = false
  collectionBtn.disabled = false
}

// plantApi.getPlants()
plantApi.getCheckListPlants()
collectionApi.getCollections()
