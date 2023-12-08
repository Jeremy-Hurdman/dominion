class card_maker {
    constructor(value, points, name) {
        this.value = value,
            this.points = points,
            this.name = name
    }
}

const copper = new card_maker(1, 0, "copper")
const silver = new card_maker(2, 0, "silver")
const gold = new card_maker(3, 0, "gold")
const estate = new card_maker(0, 1, "estate")
const duchy = new card_maker(0, 3, "duchy")
const province = new card_maker(0, 6, "province")

let base_cards = [copper, silver, gold, estate, duchy, province]
let action_cards = []
for (let i = 0; i < 15; i++) {
    const CARD = document.createElement("div")
    CARD.classList.add("card")
    document.getElementById("hand").appendChild(CARD)
}
for (let card in base_cards) {
    const CARD = document.createElement("img")
    CARD.classList.add("card")
    CARD.src = "images/200px-" + base_cards[card].name + ".jpg"
    document.getElementById("base-shop").appendChild(CARD)
}