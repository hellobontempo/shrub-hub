class Collection {

    static all = []
    static container = document.getElementById("plant-collection")
    
    constructor({id, name, user, plants}){
    this.id = id
    this.name = name
    this.user = user
    this.plants = plants

    this.button = document.createElement('button')
    this.button.innerHTML = `${this.name}`
    this.button.id = `${this.id}`
    this.button.addEventListener('click', this.showCollection)
   
    this.grid = document.createElement('div') 
    this.grid.setAttribute("class", "wrapper")
    this.grid.id = `collection-${this.id}`

    this.div = document.createElement('div')
    this.div.id = `collection-${this.id}`
    this.div.hidden = true

    collectionBtnDiv.appendChild(this.button)
    
    Collection.container.appendChild(this.div).appendChild(this.grid)
    
    Collection.all.push(this)
    }

    renderCollection(){   
    let alphaPlants = this.plants.sort(function(a, b) {
        let name1 = a.sci_name.toUpperCase(); // ignore upper and lowercase
        let name2 = b.sci_name.toUpperCase(); // ignore upper and lowercase
        if (name1 < name2) {
          return -1;
        }
        if (name1 > name2) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });

        for (const collectionPlant of alphaPlants){ 
            let p = Plant.all.find(element => element.id === collectionPlant.id)
            p.renderPlant(this.grid)
        }
    }


    showCollection (event){ 
        let id = parseInt(`${event.target.id}`)
        let c = Collection.all.filter(collection => collection.id === id, 10)
        let rest = Collection.all.filter(collection => collection.id !== id, 10)
        c[0].renderCollection()
        let cDiv = c[0].div
        if (cDiv.hidden){
            cDiv.hidden = false
            rest.forEach(c => c.button.disabled = true)
            plantCollectionButton.disabled = true
        }else{
            cDiv.hidden = true
            plantCollectionButton.disabled = false
            Collection.all.forEach(c => c.button.disabled = false)
        }
    }


}
