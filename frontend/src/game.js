plantApi.getPlants()

class PlantCard {

    static all = []
    static cards = document.getElementsByClassName('card')
    static gameGridDiv= document.getElementById("game-grid")

    constructor({id, img_src, common_name,}){
        this.id = id
        this.img_src = img_src
        this.common_name = common_name

        this.card = document.createElement('div')
        this.card.id = `${this.id}`
        this.card.setAttribute("class", "card")
        this.card.innerHTML = `<img class="front-face" src="${this.img_src}" alt="${this.common_name}">
                               <img class="back-face" src="./icons/yellow-sun-icon-vector-12597592.png" alt="Sun Icon">`

        this.card.addEventListener('click', (e)=> this.displayCard(e, this.card))
        PlantCard.gameGridDiv.appendChild(this.card)
        PlantCard.all.push(this)
    }

    displayCard (e, card){
        debugger
    }


    displayCard = function (){
        this.classList.toggle("open");
        this.classList.toggle("show");
        this.classList.toggle("disabled");
     }
}
// const cardsArray = Plant.all

// // Grab the div with an id of root
// const game = document.getElementById('game')

// // Create a section with a class of grid
// const grid = document.createElement('section')
// grid.setAttribute('class', 'grid')

// // Append the grid section to the game div
// game.appendChild(grid)

// // For each item in the cardsArray array...
// cardsArray.forEach((item) => {
//     // Create a div
//     const card = document.createElement('div')
  
//     // Apply a card class to that div
//     card.classList.add('card')
  
//     // Set the data-name attribute of the div to the cardsArray name
//     card.dataset.name = item.sci_name
  
//     // Apply the background image of the div to the cardsArray image
//     card.style.backgroundImage = `url(${item.img_src})`
  
//     // Append the div to the grid section
//     grid.appendChild(card)
//   })