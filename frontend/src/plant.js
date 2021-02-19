class Plant {

  static all = []
  

  constructor({id, sci_name, img_src, common_name, care}){
      this.id = id
      this.sci_name = sci_name
      this.img_src = img_src
      this.common_name = common_name
      this.care = care

      this.element = document.createElement('div')
      this.element.setAttribute("class", "box")
      this.element.id = `plant-${this.id}`
      this.element.innerHTML = `<h3>${this.sci_name}</h3>
                                <img src="${this.img_src}" alt="${this.sci_name}"><br>
                                ${this.common_name}`
              
      this.info = document.createElement('div')
      this.info.setAttribute("class", "hide")
      this.info.id = `plant-${this.id}`
      this.info.innerHTML = `<p>${this.care}</p>`
      // this.info.hidden = true
      this.element.addEventListener('mouseover', (e) => this.displayInfo(e, this.info))
      Plant.all.push(this)
  }

  static filter(name){
    let p = Plant.all.filter(plant => plant.sci_name === `${name}`)
    return p[0]
  }

  displayInfo(e, care){ 
   e.innerText = care.innerText
  }

  renderPlant(htmlElement){
    htmlElement.appendChild(this.element)
  }

  renderPlantChecklist(){
    this.element.innerHTML += `<input type="checkbox" id="${this.id}" name="plant_ids" value="${this.id}">`
    checkBoxPlantDiv.appendChild(this.element)
  }


}
