alert("Bienvenido a CompuCompra, donde sus pc se hace realidad!")


const compra = () => {
    let producto = ""
    let cantidad = 0
    let subtotal = 0
    let continuar = false


    do {
        producto = prompt("que producto te gustaria comprar?:\n Motherboard $1500\n Video $3000\n Memoria $800\n Sonido $500\n Procesador $1000\n Netboard $400")
        cantidad = parseInt(prompt("cuantos desea comprar?"))

        const cantidadValidada = validarCantidad(cantidad)
        valor = valorDeProducto(producto.toLocaleLowerCase())

    subtotal += valor * cantidadValidada

    continuar = confirm("desea seguir comprando?")
    } while (continuar);

        return subtotal
}

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        alert("Introdusca una cantidad valida!")
        cantidad = parseInt(prompt("cuantos desea comprar?"))
    }
    return cantidad
}

const valorDeProducto = (producto) =>{
    let valor = 0
    switch (producto) {
    case "motherboard":
        valor = 1500
        break;

    case "video":
        valor = 3000
        break;

    case "memoria":
        valor = 800
        break;

    case "sonido":
        valor = 500
        break;

    case "procesador":
        valor = 1000
        break;
        
    case "netboard":
        valor = 400
        break;    

    default:
        alert("Los datos ingresados son incorrectos, vuelva a intentar")
        valor = 0
        cantidad = 0
        cantidadValidada = 0
        break;
    }   
    return valor
}

const aplicarDescuento = (subtotal) => {
    const descuento = 0.8
    if (subtotal >= 10000) {
        alert("recibiste un descuento del 20%!")
        return subtotal * descuento
    } else {
        return subtotal
    }
}

const calcularEnvio = (subtotalConDescuento) => {
    const envio = confirm("Reaquiere de envio a domicilio?")
    const costoDeEnvio = 1000
    if (envio && subtotalConDescuento >= 10000){
        alert("Tenes envio gratis!")
    } else if (envio && subtotalConDescuento < 10000) {
        subtotalConDescuento += costoDeEnvio
        alert("El envio tiene un costo de $1000")
    } else {
        alert("gracias por su compra!")
    }
    return subtotalConDescuento
}

const consumidorFinal = (total) => {
    alert ("El precio a pagar es de $"+total+" gracias por su compra!")
}

const subtotal = compra()

const subtotalConDescuento = aplicarDescuento(subtotal)

const total = calcularEnvio(subtotalConDescuento)

consumidorFinal(total)