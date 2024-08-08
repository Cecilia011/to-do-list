console.log("Hola, consola");
let nombre = "Gabis"

//TIPOS DE DATOS
//No definido:
let noDefinido;
console.log(noDefinido);
//Número
let numero = 30;
console.log(numero);
//String, siempre entre “comillas”
let bebida = "Agua"; 
console.log(bebida);
//Boolenos, si o no, si esta activo o no 
let activo  = true; 
console.log(true);
// En estos tipos de dato se utilizan comillas simples para las cadenas, : para asignar valores y una coma cada que se agrege una nueva propiedad o un nuevo array.
// objetos {}, datos que necesitamos tener juntos, un elemento el cual tiene propiedades. De esta manera podemos obtener los datos de este objeto
let personaObjeto = {nombre:  'yoyo', apellido : 'yoyoy', edad: 23};
console.log(personaObjeto);
// Array [{}] , colección, dentro de cada llave agrego un objeto. Los array comienzan a contar desde el número 0
let personaArray = [
{nombre: 'yoyo', apellido: 'martin', edad: 39},
{ nombre: 'dsd' , apellido: 'yoyi', edad: 90},
{ nombre: 'yiyu', apellido: 'lala', edad: 98},
];
console.log(personaArray);
//Para mostar un elemento del array se usa el siguiente código, encerrando el índice del objeto
console.log(personaArray[2]);
// Función, bloques de códigp, listado de instrucciones. 
function suma (params) {
    return 2 + 2; 
}

let resultado = suma();
console.log(resultado); 
