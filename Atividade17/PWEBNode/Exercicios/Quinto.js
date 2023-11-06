var evento = require('events');
var EmissorEventos = eventos.eventEmitter;
var ee = new EmissorEventos();
ee.on('dados', function (fecha) {
    console.log(fecha);
});
setInterval(function () {
    ee.emit('dados', Date.now());
}, 500)