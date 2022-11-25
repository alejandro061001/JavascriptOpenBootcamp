const lista1 = ["carne", "frutas", "limon", "tomate", "arroz"]

lista1.push("Aceite de girasol")

console.log(lista1 )

lista1.splice(5, 1)

console.log(lista1)
//------------------------------------------------------------------------------//

const lista2 = [{ director: "Guillermo del Toro", nombre: "Pacific Rim", fecha: 2013  }, {director: "Francis Ford Coppola", nombre: "El Padrino", fecha: 1972}, {director: "John Lasseter", nombre: "Cars", fecha: 2006}];

//peliculas.filter

let oldMovies = lista2.filter(year => year.fecha <=2010)

console.log(oldMovies);



// directores.map()
let listaDirect = lista2.map(autor => autor.director);
console.log(listaDirect)

//listatitulos .map()

let listatitulos = lista2.map(title => title.nombre);

console.log(listatitulos);
let listaconcat= listaDirect.concat(listatitulos);

console.log(listaconcat);

//factor de propagacion

console.log(...listaDirect,...listatitulos);