function calcu(denominaciones, monedas, factura) {
  let pago_mayor = false;
  let faltante_pagar = factura
  let cant_monedas = 0
  let vuelto;
  let prom;
  let acum = 0;


  if (faltante_pagar >= monedas[denominaciones - 1]) {
    // si el monto es mayor a la denominacion mas alta
    for (i = denominaciones - 1; i >= 0; i--) {
      if (faltante_pagar >= monedas[i]) {
        
        cant_monedas++;
        acum = acum + monedas[i];
        
        
        console.log(acum);
        
        if (acum >= faltante_pagar) {

          console.log("pago con " + cant_monedas + " monedas Un monto de " + acum + " Suma de monedas ");
          vuelto = acum - faltante_pagar;
          break;
        }else {
          i = denominaciones;
        }
      }
    }
  } else {
    // para el pago usando billete mayor mas cercano
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

      acum = acum + monedas[i];
      console.log("falta devolver " + faltante_devolver);
      faltante_devolver = faltante_devolver - monedas[i];
      console.log("devuelvo con " + monedas[i]);
      cant_monedas++;
    }
  }

  prom = (acum/cant_monedas);

  return {cant_monedas , prom};


}

let denominaciones = 6;
let monedas = [1, 2, 5, 10, 20, 50];
let factura = 90;

let salida =  calcu(denominaciones, monedas, factura);

console.log("Promedio " + salida.prom + " monedas utilizadas " + salida.cant_monedas);