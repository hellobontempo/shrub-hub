const port = 'http://localhost:3000'
const plantApi = new PlantApi(port)
const collectionApi = new CollectionApi(port)

// const plantCollection = document.getElementById("plant-collection")  moved to collection class?
//navigation buttons: 
const navBar = document.getElementById("nav-bar")
const plantCollectionButton = document.getElementById("plant-collection-btn")
const collectionBtn = document.getElementById("make-collection-button")
const addPlantShowFormBtn = document.querySelector("#add-plant-form-btn")
const showMemoryGameBtn = document.getElementById("show-game-btn")

const plantFormContainer = document.querySelector("#create-a-plant-form")
const addPlantForm = document.getElementById("add-plant-form")

const collectionFormContainer = document.getElementById("collection-form-container")
const collectionForm = document.getElementById("collection-form")

const checkBoxPlantDiv = document.getElementById("checkbox-plant-list")
const collectionBtnDiv = document.getElementById("collection-buttons")
const plantGrid = document.getElementById("plant-grid")
const gameDiv = document.getElementById("game")


addPlantForm.addEventListener("submit", handleNewPlantSubmit)
collectionForm.addEventListener("submit", handleSubmit)

//hide and seek add plant form
let addPlant = false 
addPlantShowFormBtn.addEventListener("click", () => {
    addPlant = !addPlant;
    if (addPlant) {
      addPlantShowFormBtn.innerText = "nevermind..."
      plantFormContainer.style.display = "block";
      [collectionBtn.disabled, plantCollectionButton.disabled, showMemoryGameBtn.disabled] = [true, true, true];
    } else {
      addPlantShowFormBtn.innerText = "add a plant";
      plantFormContainer.style.display = "none";
      [collectionBtn.disabled, plantCollectionButton.disabled, showMemoryGameBtn.disabled] = [false, false, false]
    }
  });

//hide and seek create collection form
let showCollectionForm = false 
collectionBtn.addEventListener("click", () => {
  showCollectionForm = !showCollectionForm;
  if (showCollectionForm) {
    collectionFormContainer.hidden = false;
    [addPlantShowFormBtn.disabled, plantCollectionButton.disabled, showMemoryGameBtn.disabled] = [true, true, true];
    collectionBtn.innerText = "hide form"
  }else {
    collectionFormContainer.hidden = true ;
    collectionBtn.innerText = "make a collection";
    [addPlantShowFormBtn.disabled, plantCollectionButton.disabled, showMemoryGameBtn.disabled] = [false, false, false];
  }
})

//hide and seek collection buttons
let displayPlants = false
plantCollectionButton.addEventListener('click', () => { 
    displayPlants = !displayPlants;
    if (displayPlants) {
      collectionBtnDiv.hidden = false;
      [addPlantShowFormBtn.disabled, collectionBtn.disabled, showMemoryGameBtn.disabled] = [true, true, true] ;
      plantCollectionButton.innerText = "hide collections"
    } else {
      collectionBtnDiv.hidden = true;
      [addPlantShowFormBtn.disabled, collectionBtn.disabled, showMemoryGameBtn.disabled] = [false, false, false];
      plantCollectionButton.innerText = "view plant collections"
    }
  });

let displayGame = false
showMemoryGameBtn.addEventListener('click', () => { 
    displayPlants = !displayPlants;
    if (displayPlants) {
      gameDiv.hidden = false;
      [addPlantShowFormBtn.disabled, collectionBtn.disabled, plantCollectionButton.disabled] = [true, true, true];
      showMemoryGameBtn.innerText = "hide game";
    } else {
      gameDiv.hidden = true;
      [addPlantShowFormBtn.disabled, collectionBtn.disabled, plantCollectionButton.disabled] = [false, false, false];
      showMemoryGameBtn.innerText = "play memory game"
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
  alert("Plant Successfully Created!")
  addPlantShowFormBtn.innerText = "add a plant";
  plantFormContainer.style.display = "none";
  plantCollectionButton.disabled = false
  collectionBtn.disabled = false
}

plantApi.getCheckListPlants()
collectionApi.getCollections()

plantApi.getPlants(8) //makes plant cards for game
const gameGridDiv= document.getElementById("game-grid")

