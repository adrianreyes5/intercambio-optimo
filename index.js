function calcu(denominaciones, monedas, factura) {
  let faltante_pagar = factura;
  let cant_monedas = 0;
  let vuelto;
  let aux_promedio = 0;
  let promedio = 0;
  let acum = 0;

  if (faltante_pagar >= monedas[denominaciones - 1]) {

    // si el monto es mayor a la denominacion mas alta
    while (faltante_pagar > monedas[denominaciones - 1]) {
      console.log("pago con " + monedas[denominaciones - 1]);
      faltante_pagar = faltante_pagar - monedas[denominaciones - 1];
      console.log("falta pagar " + faltante_pagar);
      acum = acum + monedas[denominaciones - 1];
      cant_monedas++;
    }

    for (i = 0; i < denominaciones; i++) {
      if (faltante_pagar <= monedas[i]) {
        acum = acum + monedas[i];
        console.log("pago con " + monedas[i]);
        cant_monedas++;
        vuelto = acum - factura;
        break;
      }
    }
  } else {
    // para el pago usando billete mayor mas cercano
    for (i = 0; i < denominaciones; i++) {
      if (faltante_pagar <= monedas[i]) {
        console.log("pago con " + monedas[i]);
        acum = acum + monedas[i];
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
      acum = acum + monedas[i];
      console.log("falta devolver " + faltante_devolver);
      faltante_devolver = faltante_devolver - monedas[i];
      console.log("devuelvo con " + monedas[i]);
      cant_monedas++;
    }
  }

  aux_promedio = acum / cant_monedas;
  promedio = aux_promedio.toFixed(2);


  return { cant_monedas, promedio };
}

let denominaciones = 6;
let monedas = [1, 2, 5, 10, 20, 50];
let factura = 90;

let salida = calcu(denominaciones, monedas, factura);

console.log("Promedio " + salida.promedio + " monedas utilizadas " + salida.cant_monedas);