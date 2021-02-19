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
            p.renderPlant(checkBoxPlantDiv)
        })
    }

    getPlants() {
        fetch(this.baseUrl)
            .then(r => r.json())
                .then(data => { 
                    data.forEach(element => {
                        new Plant(element)
                        const p = new Plant(element)
                        p.renderPlant(checkBoxPlantDiv)
                    }
                )
            }
        )                
    }

    getCheckListPlants() {
        fetch(this.baseUrl)
            .then(r => r.json())
                .then(data => { 
                    data.forEach(element => {
                        const p = new Plant(element)
                        p.renderPlantChecklist()
                    }
                )
            }
        )                
    }

 
}

