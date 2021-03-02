const collectionNameInput = document.querySelector("#collection-name")
const collectionUserInput = document.querySelector("#collection-user")

class CollectionApi{

    constructor(port){
    this.baseUrl = `${port}/collections`
    }


    getCollections() {
        fetch(this.baseUrl)
            .then(r => r.json())
             .then(data => {
                data.forEach(collection => {
                    new Collection(collection).renderCollection()

            })})
    }

 
    createCollection () {
    const checkedPlants = document.querySelectorAll('input[name="plant_ids"]:checked'); 
    let array = []
    checkedPlants.forEach(element => array.push(parseInt(element.value, 10)))
    
    const collectionInfo = {
        collection: {
        name: collectionNameInput.value,
        user: collectionUserInput.value,
        plant_ids: array
        }
    }

    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(collectionInfo)
    }

    fetch(this.baseUrl, configObj)
        .then (r => r.json())
            .then (json => {
                const c = new Collection(json)
                // c.renderCollection()
            })
}}
