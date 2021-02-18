
function Collection({id, name, user, plant_ids}){
    this.id = id
    this.name = name
    this.user = user
    this.plant_ids = plant_ids
    // this.element = document.createElement('button')
}

const plants = function() {
    return Plant.all.filter((plant => plant.collection_id == this.id))
}
const renderCollection = function(){
    let div = document.createElement('div')
    div.innerHTML = `<button type="button" id="collection-${this.id}">${this.name}</button>`
    div.addEventListener('click', handleCategoryClick)
    navBar.appendChild(div)
}

const handleCategoryClick = function(e){
    debugger
}

Collection.prototype = {
    renderCollection,
    plants
}