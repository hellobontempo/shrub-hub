const plantCollectionButton = document.getElementById("plant-collection-btn")
// const plantGrid = document.getElementById("plant-grid")
const plantCollection = document.getElementById("plant-collection")

let displayPlants = false

plantCollectionButton.addEventListener('click', () => {
    displayPlants = !displayPlants;
    if (displayPlants) {
      plantCollection.hidden = false;
      resultDiv.hidden = true
    } else {
      plantCollection.hidden = true;
      resultDiv.hidden = false
    }
  });


class Plant {

  static all = []
  static plantGrid = document.getElementById("plant-grid")
  

  constructor({id, sci_name, img_src, common_name, care}){
      this.id = id
      this.sci_name = sci_name
      this.img_src = img_src
      this.common_name = common_name
      this.care = care

      this.element = document.createElement('div')
      this.element.id = `plant-${this.id}`
      this.element.innerHTML = `<img src="${this.img_src}" alt="${this.sci_name}">`
      //add event listener to click on image

      Plant.all.push(this)
  }

  renderPlant(){
      Plant.plantGrid.appendChild(this.element)
  }

  renderPlantChecklist(){
    this.element.innerHTML += `<input type="checkbox" id="${this.id}" name="plant_ids" value="${this.id}">`
    checkBoxPlantDiv.appendChild(this.element)
  }


}

// let updateCollection = function (plantData){
//     renderPlant(plantData)
//     plantCollection.hidden = false
//     displayPlants = true
// }

// let getCollection = function () {
//     fetch('http://localhost:3000/plants')
//         .then(r => r.json())
//             .then(data => renderCollection(data))
//     }

// let renderCollection = function(plants){
//     plants.forEach(p => renderPlant(p))
// }

// let renderPlant = function(plant){
//     const div = document.createElement('div')
//     div.id = `plant-${plant.id}`
//     div.innerHTML = `<img src="${plant.img_src}" alt="${plant.sci_name}" width="100">
//     `
//     plantGrid.appendChild(div)
// }


// getCollection()