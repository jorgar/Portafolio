const tarjetasEl = document.getElementById("tarjetas");
const aside = document.getElementsByTagName("aside")[0];


const getTec = Tecnologias => {
  let res = "";
  Tecnologias.forEach(tecnologia => {
    res += `<span class="tecnologia">${tecnologia}</span> `;
  });
  return res;

};
//CREACION PROYECTOS
proyectos.forEach(proyecto => {
  const nuevoProyecto = document.createElement("div");
  nuevoProyecto.classList = "tarjeta proyecto";
  nuevoProyecto.textContent = proyecto.Titulo;
  tarjetasEl.appendChild(nuevoProyecto);
  nuevoProyecto.innerHTML = `
     <img src="${proyecto.imagen}">
     <div>
       <h3>${proyecto.Titulo}</h3>
       <p>${proyecto.Descripción}</p>
       <p>Tecnologías: ${getTec(proyecto.Tecnologias)}</p>
     </div>
     <a href="${proyecto.link}" target="_blank">Ver Proyecto</a>
    `;
})

//CREACION PERSONAL
const presentacion = document.createElement("div");
presentacion.classList = "presentacion";
presentacion.innerHTML = `
  <img src="${datosPersonales.imagen}">
`;
datosPersonales.Otros.forEach(dato => {
  presentacion.innerHTML += `
      <div>
      <span>${dato[0]}:</span>
      <span>${dato[1]}</span>
      </div>
    `;
});
aside.appendChild(presentacion);

//CREACION IDIOMAS
const misIdiomas = document.createElement("div");
misIdiomas.classList = "idioma";
datosPersonales.idiomas.forEach(dato => {
  misIdiomas.innerHTML += `
      <div>
      <span>${dato[0]}:</span>
      <span>${dato[1]}</span>
      </div>
    `;
});
aside.appendChild(misIdiomas);

//CREACION TECNOLOGIAS
const misTecnologias = document.createElement("div");
misTecnologias.classList = "idioma";
datosPersonales.tecnologias.forEach(dato => {
  misTecnologias.innerHTML += `
      <div>
      <span>${dato[0]}</span>
      <span>${dato[1]}</span>
      </div>
      <progress max="10" value=${dato[1]}>;
    `;
});
aside.appendChild(misTecnologias);


const IconoRed = (red) => {
  switch (red) {
    case 'linkedin':
      return 'linkedin.png';
    case 'facebook':
      return 'face.png';
    case 'instagram':
      return 'insta.png';
    case 'github':
      return 'git.png';
    default:
      return 'mundo.png';
  }
};

//CREACION REDES SOCIALES
const misRedes = document.createElement("div");
misRedes.classList = "redes";
datosPersonales.redes.forEach(dato => {
  if (dato[1] === "") return;
  misRedes.innerHTML += `
      <a href="${dato[1]}" target="_blank">
      <img src="./img/${IconoRed(dato[0])}";
      </a>
    `;
});
aside.appendChild(misRedes);

