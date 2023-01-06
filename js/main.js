const comprarProductos = () => {
  let producto = "";
  let precio = 0;
  let cantidad = 0;
  let continuarComprando = false;
  let totalCompra = 0;

  do {
    producto = prompt(
      "¿Te gustaría comprar hierbas medicinales naturales, secas o en polvo?",
      "Ejemplo: hierbas naturales"
    );
    cantidad = parseInt(
      prompt("¿Cuántos paquetes de 200 gramos querés comprar?")
    );

    const cantidadValidada = validarCantidad(cantidad);
    console.log(cantidadValidada);

    switch (producto) {
      case "hierbas naturales":
        precio = 250;
        break;
      case "hierbas secas":
        precio = 300;
        break;
      case "hierbas en polvo":
        precio = 550;
        break;
      default:
        alert("Alguno de los datos ingresados no es correcto");
        precio = 0;
        cantidad = 0;
    }
    totalCompra += precio * cantidadValidada;

    continuarComprando = confirm("¿Querés agregar otro producto?");
  } while (continuarComprando);

  const totalConDescuento = calcularDescuento(totalCompra);
  calcularEnvio(totalConDescuento);
};

const validarCantidad = (cantidad) => {
  while (Number.isNaN(cantidad) || cantidad === 0) {
    if (cantidad !== 0) {
      alert("Debe agregar un número.");
    } else {
      alert("Debe agregar un número distinto de cero.");
    }
    cantidad = parseInt(
      prompt("¿Cuántos paquetes de 200 gramos querés comprar?")
    );
  }
  return cantidad;
};

const calcularDescuento = (totalCompra) => {
  let totalConDescuento = 0;

  if (totalCompra >= 3500) {
    totalConDescuento = totalCompra * 0.85;
    return totalConDescuento;
  } else {
    return totalCompra;
  }
};

const calcularEnvio = (totalConDescuento) => {
  let tieneEnvioADomicilio = confirm("¿Querés envío a domicilio?");

  if (tieneEnvioADomicilio && totalConDescuento >= 2000) {
    alert(
      "Tenes envío a domicilio gratis porque la compra supera los $2000. El total de la compra es $" +
        totalConDescuento
    );
  } else if (
    tieneEnvioADomicilio &&
    totalConDescuento < 2000 &&
    totalConDescuento !== 0
  ) {
    totalConDescuento += 500;
    alert(
      "El envío cuesta $800. El total de la compra es $" + totalConDescuento
    );
  } else {
    alert("El total de la compra es $" + totalConDescuento);
  }
};

comprarProductos();
