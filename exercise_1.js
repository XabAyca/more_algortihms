// Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.

// Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, la fonction devra sortir true car 10 + 7 = 17. Si je te donne la liste [1, 8, 10, 21] et k = 19, la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition.

// Exercice 1
// Résous le sujet 1 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

const list = [1, 8, 10, 21]
const k    = 19

class Verification{
  constructor(array,k){
    this.array = array
    this.k     = k
    this.count = 0
    this.programm()
  }

  programm(){
    let result = false
    for(let i = 0; i < this.array.length; i++){
      for(let j = 1; j < this.array.length; j++){
        this.count++
        if(this.array[i]+this.array[j] == this.k){
          return console.log(result = true+`, number of comparisons: ${this.count}`)
        }
      }
    }
    return console.log(result+`, number of comparisons: ${this.count}`)
  }
}

new Verification(list,k)