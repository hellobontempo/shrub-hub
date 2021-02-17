class PlantApi {
   
    constructor(port){
        this.baseUrl = `${port}/plants`
    }

    createPlant(configObj){
        fetch(this.baseUrl, configObj)
            .then (r => r.json())
                .then (json => { 
                    const p = new Plant(json)
                    p.renderPlant()
                })
    }

    getPlants() {
        fetch(this.baseUrl)
            .then(r => r.json())
                .then(data => { 
                    data.forEach(element => {
                        const p = new Plant(element)
                        p.renderPlant()
                        }
                )})                
    }

    getCheckListPlants() {
        fetch(this.baseUrl)
            .then(r => r.json())
                .then(data => { 
                    data.forEach(element => {
                        const p = new Plant(element)
                        p.renderPlantChecklist()
                        }
                )})                
    }


 
}

