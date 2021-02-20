
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false
let counter = 0

class PlantCard {

    static all = []
 
    constructor({id, img_src, common_name,}){
        this.id = id
        this.img_src = img_src
        this.common_name = common_name

        this.card = document.createElement('div')
        this.card.id = `${this.id}`
        this.card.setAttribute("class", "card")
        this.card.innerHTML = `<img class="front-face" src="${this.img_src}" alt="${this.common_name}">
                               <img class="back-face" src="./icons/yellow-sun-icon-vector-12597592.png" alt="Sun Icon">`

        this.card.addEventListener('click', (e)=> this.flipCard(e, this.card))
        PlantCard.all.push(this)
    }

    static appendCards(){
        this.shuffle().forEach(card => gameGridDiv.appendChild(card.card) )  
    }
    
    static removeCards(){    
        this.all.forEach(element => element.card.remove() )  
    }
    
    static shuffle() {
        let array = this.all
        let currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
     
        return array;
      }

    flipCard (){
        if (lockBoard) return;
        if (this === firstCard) return;

        this.card.classList.add('flip');
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return
        }

        secondCard = this
        hasFlippedCard = false
    

        this.checkForMatch()
    }

    checkForMatch(){
    counter++
        if (firstCard.id === secondCard.id){
            this.disableCards()
            return
        }
        this.unflipCards()
        lockBoard = true
    }

    disableCards (){
        firstCard.card.removeEventListener('click', this.flipCard)
        secondCard.card.removeEventListener('click', this.flipCard)
        PlantCard.test()
    }

    unflipCards(){
        setTimeout( () => {
            firstCard.card.classList.remove('flip')
            secondCard.card.classList.remove('flip')
            lockBoard = false
        }, 700)

    }
    
    static test = () => {
    let flippedCards = document.getElementsByClassName("card flip")
        if (flippedCards.length === PlantCard.all.length){
            setTimeout( () => {
            alert(`well done! it only took you ${counter} moves`)
            },1000)
            setTimeout( () => {
            this.all.forEach(element =>(element.card.classList.remove('flip')))
            PlantCard.removeCards()
            let btn = document.createElement("button")
            btn.innerText = "Play Again!"
            btn.addEventListener('click', PlantCard.startNewGame)
            scoreDiv.appendChild(btn)
            },2000)
            
        }
    }

    static startNewGame() {
        hasFlippedCard = false;
        firstCard, secondCard;
        lockBoard = false
        counter = 0
        PlantCard.appendCards()
        this.remove()
    }
    
}
