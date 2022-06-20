/*1. Mostrar en consola la secuencia de Fibonacci:
a. Entre los números 0 y 1000.
b. Números pares entre 0 y 1000.
c. Números impares entre 0 y 1000.
          Hint: Puedes usar recursividad o algún ciclo o método iterador visto en clase*/

//secuencia de Fibonacci con limite 1000
const fibonacci_secuencia = () => {
    let limite_al_mil = 1000;
 let n1 = 0, n2 = 1, suma_predecesores
 

 suma_predecesores = n1 + n2;

 while (suma_predecesores <= limite_al_mil){
     console.log(suma_predecesores)
     n1 = n2;
     n2 = suma_predecesores;
     suma_predecesores = n1 + n2;
 }
}

fibonacci_secuencia();

//secuencia de Fibonacci con limite 1000 separados en pares e impares
const fibonacci_par_impar = () => {
    let n1 = 0, n2 = 1, suma_predecesores
    suma_predecesores = n1 + n2;
    let pares = [];
    let impares = [];    
   
    while (suma_predecesores < 1000){
        n1 = n2;
        n2 = suma_predecesores;
        suma_predecesores = n1 + n2;
        if(suma_predecesores % 2 === 0){
            pares.push(suma_predecesores)
        }
        else if(suma_predecesores % 2){
            impares.push(suma_predecesores)
        }
    }
    console.log('Números pares: '+pares)
    console.log('Números impares: '+impares)
}

fibonacci_par_impar();
//2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
let pokemon = ['Pikachu','Charmander','Bulbasaur','Squirtle']

let pokemon_mayuscula = pokemon.map(pokemon => pokemon.toUpperCase())
console.log(pokemon_mayuscula)
//3. Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo fuego.

let pokemones = [
         {
             nombre: 'Pikachu',
             tipo: 'Electrico'
         },
         {
             nombre: 'Charmander',
             tipo: 'Fuego',
         },
         {
             nombre: 'Bulbasaur',
             tipo: 'Planta'
         },
         {
             nombre: 'Squirtle',
             tipo: 'Agua'
         },
         {
             nombre: 'Charmeleon',
             tipo: 'Fuego'
         },
         {
             nombre: 'Weedle',
             tipo: 'bicho'
         },
         {
             nombre: 'Charizard',
             tipo: 'Fuego'
         }
]

let pokemones_fuego = pokemones.filter(pokemones => pokemones.tipo === 'Fuego')

console.log(pokemones_fuego)