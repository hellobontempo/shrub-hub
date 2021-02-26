const sciNameInput = document.querySelector("#plant-sci-name")
const commonNameInput = document.querySelector("#plant-common-name")
const imageUrlInput = document.querySelector("#plant-image-url")
const careInput = document.querySelector("#plant-care")

class PlantApi {
   
    constructor(port){
        this.baseUrl = `${port}/plants`
    }

    createPlant(){
        const plantInfo = {
            sci_name: sciNameInput.value,
            common_name: commonNameInput.value,
            img_src: imageUrlInput.value,
            care: careInput.value
        }
        const configObj = {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }, 
            body: JSON.stringify(plantInfo)
        }
        fetch(this.baseUrl, configObj)
        .then (r => r.json())
        .then (json => { 
            new Plant(json)
            const p = new Plant(json)
            // p.renderPlant(checkBoxPlantDiv)
            p.renderPlantChecklist()
        })
    }
    
    getPlants(num) {
        fetch(this.baseUrl)
            .then(r => r.json())
                .then(data => { 
                    data.slice(0,num).forEach(element => {
                        const p = new PlantCard(element)
                        const q = new PlantCard(element)
                    })
                    PlantCard.appendCards()
            })
                      
    }

    getCheckListPlants() {
        fetch(this.baseUrl)
            .then(r => r.json())
                .then(data => { 
                    data.forEach(element => {
                        const p = new Plant(element)
                        p.makePlantChecklist()
                        p.appendChecklist()
                    }
                )
            }
        )                
    }

 
}

