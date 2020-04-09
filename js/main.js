// Con este codigo tomo los meta-datos de los valores en el boton al dar clik

const tecla = document.getElementsByClassName('tecla');
for (let i = 0; i < tecla.length; i++) {
  const presiona = () => {
    if (!tecla[i]) return;
    tecla[i].addEventListener('click', (e) => {
      const t = e.target,
            d = t.dataset;
      //Detecta si se pulsa un numero      
      if (d.numero) writeScreen(d.numero)
      //detecta si se pulsa una operacion matematica
      if (d.matematica) //getOperatio()
      //Detecta si se pulsa un aoperacion de igual o limpiar
      if (d.operacion); //runOperation()
    });
  };
  presiona(tecla[i]);
}

//Con esta funcion concatenamos los numeros que pulsamos

const writeScreen = numero => {
    let actual = document.getElementById('pantalla').innerHTML;
    let numeroN = document.getElementById('pantalla').innerHTML =numero;
    document.getElementById('pantalla').innerHTML = actual + numeroN
}


