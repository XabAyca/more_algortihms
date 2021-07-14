// Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.

// Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, la fonction devra sortir true car 10 + 7 = 17. Si je te donne la liste [1, 8, 10, 21] et k = 19, la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition.

// Résous le sujet 1 en ne faisant qu'un seul passage sur ta liste.

// Si tu réussis cet exercice, sache qu'il a été posé en entretien par Google. Tu peux postuler à Google. La classe, non ?

const list = [10, 15, 3, 7]
const k    = 22

class Verification{
  constructor(list,k){
    this.list  = list
    this.k     = k
    this.count = 0
    this.programm(this.list,this.k)
  }

  // Create a new array with the difference of k and the elements of array. After verify for all element if includes one of new array elements. If includes return true...
  programm(list,k){
    let tempArray = []
    for (let i = 0; i < list.length; i++){
      tempArray.push(k - list[i]);
      this.count++;
      if (tempArray.includes(list[i])) {
        return console.log(true+`, number of comparisons: ${this.count}`);
      } else {
        tempArray.push(k - list[i+1]);
      }
    }
    return console.log(false+`, number of comparisons: ${this.count}`);
  }
}

new Verification(list,k)