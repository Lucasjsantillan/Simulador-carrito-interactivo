// DECLARO CONSTRUCTOR PARA PRODUCTO
class Producto {
    constructor(nombre, categoria, precio, material, codigo) {
        this.nombre = nombre.toUpperCase();
        this.categoria = categoria;
        this.precio = parseFloat(precio);
        this.material = material;
        this.codigo = codigo;
        this.vendido = false;
    }
    cotizar() {
        alert("EL VALOR DEL PRODUCTO ES " + this.precio);
    }
    vender() {
        this.vendido = true;
    }
}

// DECLARO OBJETOS DE LA CLASE PRODUCTO
const rolex = new Producto("rolex", "reloj", 5000, "oro", "R");
const patekphilippe = new Producto("Patek Philippe", "reloj", 10000, "oro rosa", "P");
const vanguart = new Producto("Vanguart", "reloj", 15000, "oro blanco", "V");
const audemars = new Producto("Audemars", "", 20000, "oro rojo", "A");

//ARRAY CON MIS PRODUCTOS
const carrito = []

//FUNCIÓN QUE AGREGA AL ARRAY PRODUCTOS ELEGIDOS POR EL USUARIO
let agregarProducto = () => {
    let productoElegido = prompt("Ingrese el codigo del Producto que desea comprar (R: rolex, P: PatekPhilippe, V: Vanguart,  A: Audemars").toLowerCase()

    while (productoElegido != "salir") {
        switch (productoElegido) {
            case rolex.codigo:
                rolex.cotizar()
                carrito.push(rolex)
                productoElegido = "salir"
                break
            case patekphilippe.codigo:
                patekphilippe.cotizar()
                carrito.push(patekphilippe)
                productoElegido = "salir";
                break
            case vanguart.codigo:
                vanguart.cotizar()
                carrito.push(vanguart)
                productoElegido = "salir";
                break
            case audemars.codigo:
                audemars.cotizar()
                carrito.push(audemars)
                productoElegido = "salir";
                break
            default:
                productoElegido = prompt("Ingrese nuevamente el codigo del Producto que desea comprar (R: rolex, P: PatekPhilippe, V: Vanguart,  A: Audemars")
        }
    }
    if (confirm("Desea agregar otro producto a la compra?")) {
        agregarProducto();
    }
    else {
        alert("Su total es de $ " + totalcarrito())

    }
}

//FUNCION QUE ELIMINA UN PRODUCTO DEL CARRITO
let eliminarProducto = () => {
    productoEliminar = prompt("Si desea eliminaar un producto del carrito, ingrese el codigo (R: Rolex, P: PatekPhilippe, V: Vanguart,  A: Audemars").toLowerCase()

    let num = 0;
    carrito.forEach((producto) => {

        if (producto.codigo == productoEliminar) {
            console.log("producto.código " + producto.codigo + "productoEliminar " + productoEliminar + "num " + num);
            carrito.splice(num, 1);
            num += 1;
        }
        else { num += 1; }
    })

}

//FUNCION QUE OBTIENE TOTAL A PAGAR DEL CARRITO
const totalcarrito = () => {
    let sumaTotal = 0;
    carrito.forEach((producto) => {
        sumaTotal += producto.precio
    })
    return sumaTotal
}

//MAIN
agregarProducto()

alert("Procesaremos la compra, confirme si quiere todos los productos");
eliminarProducto()
alert("Su total actualizado es de $ " + totalcarrito() + ", procesaremos la compra")

