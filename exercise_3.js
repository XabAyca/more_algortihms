// Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.

// Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, la fonction devra sortir true car 10 + 7 = 17. Si je te donne la liste [1, 8, 10, 21] et k = 19, la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition.

// Résous le sujet 1 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

const list = [1, 8, 10, 21]
const k    = 30

class Verification{
  constructor(list,k){
    this.list  = list
    this.k     = k
    this.count = 0
    this.programm(this.list)
  }

  programm(list,n=0){
    let newlist = [...list]
    newlist.splice(n,1)
    for(let i=0; i < newlist.length; i++){
      this.count++
      if (list[n]+newlist[i] == this.k){
        return console.log(true+`, number of comparisons: ${this.count}`) 
      }else if(n == list.length-1){
        return console.log(false+`, number of comparisons: ${this.count}`)
      }
    }
    return this.programm(this.list,n+1)
  }
}

new Verification(list,k)