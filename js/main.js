// Con este codigo tomo los meta-datos de los valores en el boton al dar clik

const tecla = document.getElementsByClassName('tecla');
for (let i = 0; i < tecla.length; i++) {
  const presiona = () => {
    if (!tecla[i]) return;
    tecla[i].addEventListener('click', (e) => {
      const t = e.target,
            d = t.dataset;
      //Detecta si se pulsa un numero      
      if (d.numero) writeScreen(d.numero) // Ok
      //detecta si se pulsa una operacion matematica
      if (d.matematica) getOperation(t, d.matematica) //ok
      //Detecta si se pulsa un aoperacion de igual o limpiar
      if (d.operacion); //runOperation()
    });
  };
  presiona(tecla[i]);
}

//Con esta funcion concatenamos los numeros que pulsamos
//const actual = document.getElementsByClassName('pantalla');

const writeScreen = numero => {
    let actual = document.getElementById('pantalla').textContent;
    let numeroN = document.getElementById('pantalla').textContent = numero;
    document.getElementById('pantalla').textContent = actual + numeroN
}


const getOperation = (elemento, matematica) => {
    let numero1 = document.getElementById('pantalla').textContent
    console.log(numero1)
    let tipoOperacion = matematica
    let numeroN =document.getElementById('pantalla').textContent = elemento;
    document.getElementById('pantalla').textContent = numeroN.textContent
    return(numero1, tipoOperacion )
}



