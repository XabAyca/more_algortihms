// Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest. Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.

// Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait retourner 3, puisque l'étage le plus haut des immeubles ayant comme taille 8, 6, et 1 ont tous une vue à l'ouest. Ou autre exemple la liste [1, 4, 5, 8] devrait te retourner 1 puisque seul le dernier bâtiment a au moins un appartement avec une vue à l'ouest.

// Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

const list = [3, 7, 8, 10, 3, 11, 1]

class HowManyBuilding{
  constructor(list){
    this.list          = list
    this.count         = 0
    this.buildingCount = 0
    this.programm(this.list)
  }

  programm(list){
    for( let i = 0; i < list.length; i++){
      let temp = true
      for(let j = i+1; j < list.length; j++){
        this.count++
        if(list[i] < list[j]){
          temp = false
        }
      }
      if(temp){
        this.buildingCount++
      }
    }
    console.log(`Numbers of buildings can see sunset : ${this.buildingCount}. Numbers of comparisons : ${this.count}`)
  }
}

new HowManyBuilding(list)