var Cylon = require('cylon');

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/tty.usbmodem1421' }
  },

  devices: {
    sensor: {
      driver: 'analogSensor',
      pin: 0,
      upperLimit: 900,
      lowerLimit: 100
    }
  },

  work: function(my) {
      console.log(my.sensor);
  }
}).start();