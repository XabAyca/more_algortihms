// Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest. Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.

// Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait retourner 3, puisque l'étage le plus haut des immeubles ayant comme taille 8, 6, et 1 ont tous une vue à l'ouest. Ou autre exemple la liste [1, 4, 5, 8] devrait te retourner 1 puisque seul le dernier bâtiment a au moins un appartement avec une vue à l'ouest.

// Résous le sujet 2 en ne faisant qu'un seul passage sur ta liste.

// Si tu réussis cet exercice, sache qu'il a été posé en entretien par Mailchimp. Tu peux postuler à Mailchimp. La classe, non ?

const list = [3, 7, 8, 3, 6, 1]

class HowManyBuilding{
  constructor(list){
    this.list          = list
    this.count         = 0
    this.buildings     = []
    this.programm(this.list)
  }

  // Push the last element of the array in a new array & compare in declining. If is bigger than the last element of the new array, add it to the new array. The answer is the length of the new array
  programm(list){
    this.buildings.push(list[list.length-1])
    for (let i=list.length-2; i>=0; i--){
      this.count++
      if(list[i]>this.buildings[this.buildings.length-1]){
        this.buildings.push(list[i])
      }
    }
    return console.log(`Numbers of buildings can see sunset : ${this.buildings.length}. Numbers of comparisons : ${this.count}`)
  }
}

new HowManyBuilding(list)