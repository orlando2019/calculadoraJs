const teclas = document.getElementById('teclas'),
      pantallas = document.getElementById('pantalla') 
      

const calculadora = () => {
    if(!teclas) return
    teclas.addEventListener('click', e => {
        const t = e.target,
              d = t.dataset
        //Detecta si pulsamos un numero
        if (d.numero) writeScreen(d.numero)
        //Detecta si pulsamos una operacion matematicas
        if (d.matematica) console.log('matematica')
        //Detecta si pulsamos operacion de lipiar o igual
        if (d.operacion) console.log('operacion')
    })
}  

const writeScreen = numero => {
    pantallas.textContent += numero
}


calculadora()

      