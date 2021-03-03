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
      this.front = document.createElement('div')
      this.front.id = `front-${this.id}`
      this.front.innerHTML = `<h3>${this.sci_name}</h3>
                              <img id="img-${this.id}" src="${this.img_src}" alt="${this.sci_name}">`
      this.back = document.createElement('div')
      this.back.id = `back-${this.id}`
      this.back.hidden = true
      this.back.innerHTML = ` <h3>${this.common_name}</h3>
                              <p id="plant-${this.id}">${this.care}</p>`
      this.front.addEventListener('mouseover', (e) => this.displayBack(this))
      this.back.addEventListener('mouseout', (e) => this.displayFront(this))
      this.element.appendChild(this.front)
      this.element.appendChild(this.back)
      Plant.all.push(this)
  }

  static makeCheckList(){
    this.all.forEach(plant => plant.makePlantCheckBox())
  }

  static removeCheckList (){
    this.all.forEach(plant => plant.removePlantCheckBox())
  }

  static appendPlants(){
    this.all.forEach(plant => plant.renderPlant(checkBoxPlantDiv))  
  }

  static sortPlantsAlpha(){
    let sortedPlants = Plant.all.sort(function(a, b) {
      let nameA = a.sci_name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.sci_name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    checkBoxPlantDiv.innerHTML = ""
    sortedPlants.forEach(plant => plant.appendChecklist())
    sortPlantsAtoZBtn.innerHTML = "alphabetized!"
  }

  makePlantCheckBox(){
    let div = document.createElement('div')
    div.innerHTML = `<div class="check-box-div"><input type="checkbox" id="${this.id}" name="plant_ids" value="${this.id}"></div>`
    this.element.appendChild(div)
  }

  removePlantCheckBox(){
    let div = document.querySelector(".check-box-div")
    div.remove()
  }
  appendChecklist (){
    checkBoxPlantDiv.appendChild(this.element)
  }

  renderPlant(htmlElement){
    htmlElement.appendChild(this.element)
  }

  displayBack = (e) => {
    e.front.hidden = true
    e.back.hidden = false
  }

  displayFront = (e) => {
    e.front.hidden = false
    e.back.hidden = true
  }

}
