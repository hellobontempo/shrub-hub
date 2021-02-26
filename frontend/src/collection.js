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
        for (const collectionPlant of this.plants){ 
            let p = Plant.all.find(element => element.id === collectionPlant.id)
            p.renderPlant(this.grid)
        }
    }


    showCollection (event){ 
        let id = parseInt(`${event.target.id}`)
        let c = Collection.all.filter(collection => collection.id === id,10)
        console.log(c)
        let rest = Collection.all.filter(collection => collection.id !== id,10)
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
