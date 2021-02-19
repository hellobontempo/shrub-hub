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
              
      this.element.addEventListener('click', this.displayInfo)
  

      // this.info = document.createElement('div')
      // this.info.id = `plant-${this.id}`
      // this.info.innerHTML = `<h1>${this.name}</h1>`
      // this.info.hidden = true

      Plant.all.push(this)
  }

  static filter(name){
    let p = Plant.all.filter(plant => plant.sci_name === `${name}`)
    return p[0]
  }

  displayInfo(){ //change this, it is very annoying
    let n = this.querySelector("img").alt
    let p = Plant.filter(n)
    alert(`This plant is ${p.sci_name}, commonly known as ${p.common_name}`) 
  }

  renderPlant(htmlElement){
    htmlElement.appendChild(this.element)
  }

  renderPlantChecklist(){
    this.element.innerHTML += `<input type="checkbox" id="${this.id}" name="plant_ids" value="${this.id}">`
    checkBoxPlantDiv.appendChild(this.element)
  }


}
