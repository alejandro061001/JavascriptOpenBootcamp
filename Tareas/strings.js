let nombre = "Alejandro";
let apellido = "Zamudio";
// se juntas dos strings
let estudiante = nombre.concat(" ", apellido)
// se pone todo el string en mayusculas
let estudianteMayus= estudiante.toUpperCase();
//se pone todo el string en minusculas
let estudianteMinus= estudiante.toLowerCase();
//se cuenta el numero de letras que contiene el string incluido los espacios
let estudianteLength = estudiante.length;
// variable que contenga la primera letra de Nombre
let firstcharNombre= nombre.charAt(0)
// variable que contenga la ultima letra de Apellido
let lastcharApell = apellido.charAt(6);

//variable que elimine todos los espacios de Estudiante
let blankDel= estudiante.replace(/\s+/g, '');

let includeNombre= estudiante.includes(nombre);
