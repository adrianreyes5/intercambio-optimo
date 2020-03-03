function calcu(denominaciones, monedas, factura) {
  let pago_mayor = false;
  let faltante_pagar = factura
  let cant_monedas = 0
  let vuelto;
  let restante = 0;


  if (factura >= monedas[denominaciones - 1]) {
    // si el monto es mayor a la denominacion mas alta
    for (i = denominaciones - 1; i >= 0; i--) {
      if (faltante_pagar >= monedas[i]) {
        console.log("pago con " + monedas[i]);
        cant_monedas++;
        vuelto = faltante_pagar - monedas[i];
        faltante_pagar = vuelto;
      }
      if (i === 0 && faltante_pagar >= 1) i = denominaciones;
      if (faltante_pagar === 0) break;
    }
  } else {
    //para el pago usando billete mayor mas cercano
    for (i = 0; i < denominaciones; i++) {
      if (faltante_pagar <= monedas[i]) {
        console.log("pago con " + monedas[i]);
        cant_monedas++;
        vuelto = monedas[i] - factura;
        break;
      }
    }
  }



  faltante_devolver = vuelto;

  //para el vuelto exacto
  for (i = denominaciones - 1; i >= 0; i--) {
    while (faltante_devolver >= monedas[i]) {
      console.log("falta devolver " + faltante_devolver);
      faltante_devolver = faltante_devolver - monedas[i];
      console.log("devuelvo con " + monedas[i]);
      cant_monedas++;
    }
  }

  // console.log(faltante_pagar);
  return cant_monedas;


}

let denominaciones = 6;
let monedas = [1, 3, 5, 10, 20, 50];
let factura = 74;
console.log("se utilizaron " + calcu(denominaciones, monedas, factura) + " monedas o billetes");