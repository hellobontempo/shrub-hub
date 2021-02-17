const plantCollectionButton = document.getElementById("plant-collection-btn")

let displayPlants = false

plantCollectionButton.addEventListener('click', () => {
    displayPlants = !displayPlants;
    if (displayPlants) {
      plantCollection.hidden = false;
      resultDiv.hidden = true
    } else {
      plantCollection.hidden = true;
    }
  });

let updateCollection = function (plantData){
    renderPlant(plantData)
    plantCollection.hidden = false
    displayPlants = true
}

let getCollection = function () {
    fetch('http://localhost:3000/plants')
        .then(r => r.json())
            .then(data => renderCollection(data))
    }

let renderCollection = function(plants){
    plants.forEach(p => renderPlant(p))
}

let renderPlant = function(plant){
    const div = document.createElement('div')
    div.id = `plant-${plant.id}`
    div.innerHTML = `<img src="${plant.img_src}" alt="${plant.sci_name}" width="100">
    `
    plantGrid.appendChild(div)
}


getCollection()