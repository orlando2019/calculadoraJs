// Con este codigo tomo los meta-datos de los valores en el boton 

const tecla = document.getElementsByClassName('tecla');
for (let i = 0; i < tecla.length; i++) {
  const presiona = () => {
    if (!tecla[i]) return;
    tecla[i].addEventListener('click', (e) => {
      const t = e.target,
            d = t.dataset;
      if (d.numero) console.log('numero');

      if (d.operacion) console.log('operacion');
    });
  };
  presiona(tecla[i]);
}




