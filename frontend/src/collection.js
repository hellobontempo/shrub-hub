
function Collection({id, name, user, plants}){
    this.id = id
    this.name = name
    this.user = user
    this.plants = plants


    // this.element = document.createElement('button')
}



const renderCollection = function(){
    let plants = this.plants.map(plant => new Plant(plant))
    for (const plant of plants){
        plantGrid.appendChild(plant.element)
    }
}


const handleCategoryClick = function(e){
    debugger
}

Collection.prototype = {
    renderCollection,
}