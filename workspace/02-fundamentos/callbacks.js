
const getUsuarioById = (id, callback) => {
  
  const usuario = {
    id,
    nombre : 'Leandro'
  };

  setTimeout(()=>{
      callback(usuario);
  }, 1500);

};

getUsuarioById(10, (usuario) => {
    console.log(`Hola ${usuario.nombre.toUpperCase()}`);
});

