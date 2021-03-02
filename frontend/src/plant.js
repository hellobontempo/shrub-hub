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
                                <p class="description-container" id="plant-${this.id}" hidden>${this.care}</p>`
      this.element.addEventListener('mouseover', (e) => this.displayCare(this.element))
      this.element.addEventListener('mouseout', (e) => this.displayPhoto(this.element))

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
    // this.element.innerHTML += `<div class="check-box-div"><input type="checkbox" id="${this.id}" name="plant_ids" value="${this.id}"></div>`
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

  displayCare(element){
    let img = element.querySelector("img")
    let p = element.querySelector("p")
    img.hidden = true
    p.hidden = false
  }

  displayPhoto(element){
    let img = element.querySelector("img")
    let p = element.querySelector("p")
    img.hidden = false
    p.hidden = true
  }



}
