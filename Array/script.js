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

//Cortar la longitud de un array
frutas.length = 2

document.write(" Se Corta la longitud del array " + frutas+ "<br>") // ["manzana", "pera"]
document.write(" Se imprime la nueva longitud del array "+ frutas.length+ "<br>") // 2

// Añadir un elemento al array
document.write("<h3>Añadir un elemento aun array</h3>")
frutas.push(" naranja", "tomate", "uva", )
document.write("Se añade dos elementos al arreglo " + frutas+ "<br>") // ["plátano", "fresa", "naranja"]

//Añadir un elemento al inicio de un array
frutas.unshift("strawberry",)
document.write("Se añade un elemento al inicio del arreglo " + frutas+ "<br>")
document.write("Nueva longitud del arreglo "+ frutas.length + "<br>")

// Eliminar el ultimo elemento del array
document.write("<h3>Eliminar un elemento a un array</h3>")
frutas.pop()
const ultimaFruta = frutas.pop()
document.write("Se elimina el ultimo elemento del arreglo " + frutas+ "<br>")//naranja
document.write("Se muestra el elemento eliminado del arreglo creando una nueva constante: " + ultimaFruta+ "<br>")//naranja

//Eliminar el primer elemento del array
frutas.shift()
const primeraFruta = frutas.shift()
document.write("Se elimina el primer elemento del arreglo " + frutas+ "<br>")//pera
document.write("Se muestra el elemento eliminado del arreglo creando una nueva constante " + primeraFruta+ "<br>")//pera
document.write("Nueva longitud del arreglo "+ frutas.length + "<br>")

document.write("<h3>Unir elementos a un array</h3>")

const n = [1, 2, 3]
document.write(" Este el el primer array " +n +"<br>")
const n1 = [4, 5]
document.write(" Este es el segundo array " +n1 +"<br>")

const allNumbers = n.concat(n1)
document.write(" Se concatenan los array " +allNumbers +"<br>") // [1, 2, 3, 4, 5]

//Utilizando funciones en arreglos
document.write("<h3>Ejercicio practico</h3>")
function procesarPedido(pedido) {
    const cliente = pedido.shift();
    pedido.unshift("bebida");
    pedido.push(cliente);// tu código aquí
  return pedido
  }
const pedidos = ["roberta", "pan", "Chocolate", "trufas"]
document.write("El pedido realizado es: "+ procesarPedido(pedidos)+"<br>" )
document.write("el cliente es "+ pedidos[4])