const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');


// Socket del cliente   
const socket = io();

socket.on('connect', () => {
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

socket.on('enviar-mensaje', (payload, callback) => {
    console.log(payload);
});

btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value;

    const payload = {
        mensaje,
        id: '123fjdsf8isd3!@',
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server ', id);
    });
});