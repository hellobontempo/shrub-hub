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
                                <img id="img-${this.id}" src="${this.img_src}" alt="${this.sci_name}">
                                <h4>${this.common_name}</h4>
                                <p id="plant-${this.id}" hidden>${this.care}</p>`

      this.element.addEventListener('mouseover', (e) => this.displayCare(e, this.element))
      this.element.addEventListener('mouseout', (e) => this.displayPhoto(e, this.element))

      Plant.all.push(this)
  }

  renderPlant(htmlElement){
    htmlElement.appendChild(this.element)
  }

  displayCare(e, element){
    let img = element.querySelector("img")
    let p = element.querySelector("p")
    img.hidden = true
    p.hidden = false
  }

  displayPhoto(e, element){
    let img = element.querySelector("img")
    let p = element.querySelector("p")
    img.hidden = false
    p.hidden = true
  }

  makePlantChecklist(){
    this.element.innerHTML += `<input type="checkbox" id="${this.id}" name="plant_ids" value="${this.id}">` //separate into 2 different functions
  }


  appendChecklist (){
    checkBoxPlantDiv.appendChild(this.element)
  }
  


}
