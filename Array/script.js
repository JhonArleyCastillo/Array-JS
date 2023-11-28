document.write("<h3>ELEMENTOS DE UN ARRAY</h3>")
//Acceder a un elemento de un array
const numb = [ 1, 2, 3, 4, 5];
document.write( " El arreglo en su primera posicion tiene el numero "+ numb[0]+"<br>")
document.write( " El arreglo en su tercera posicion tiene el numero "+ numb[2]+"<br>")
let index = 4
document.write("La variable index correspoonde a la ultima posicion " + index +"<br>")

// Modificar los elementos de un array
const numbers = [ 1, 2, 3, 4, 5]

numbers[0] = 10
numbers[2] = 30

document.write("se modifica la primera y tercera pocicion " + numbers + "<br>") // [10, 2, 30, 4, 5]

// Longitud de un arreglo

document.write("<h3>La longitud de un array</h3>")
const frutas = [" manzana", " pera", " plátano", " fresa"]
document.write("La longitud del arreglo Frutas es "+ frutas.length+ "<br>") // 4
document.write("El arreglo de Frutas es "+ frutas + "<br>") // manzana, pera, platano,fresa.