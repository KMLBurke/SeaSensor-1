
var Blynk = require("blynk-library");
var sense = require("node-sense-hat");
var imu = sense.Imu;
var IMU = new imu.IMU();

var AUTH = 'Xho3MtrXgN5vR_mOcIg-3Mplok0uropA';
var wia = require('wia')('d_sk_lKyi93vC0sUUIwqdAQjAHY3f');

var blynk = new Blynk.Blynk(AUTH);

var v1 = new blynk.VirtualPin(1);
var v2 = new blynk.VirtualPin(2);
var v3 = new blynk.VirtualPin(3);

v1.on('write', function(param) {
     var colour = param.map(Number);
     sense.Leds.clear(colour);
});

v2.on('write', function(param) {
 console.log("v2: lat. " + param[0])
 wia.locations.publish({
  latitude: param[0],
  longitude: param[1]
});
});

v3.on('read', function() {
  IMU.getValue(function (e, data) {
     v3.write(data.temperature);
     
  })
});

wia.stream.connect();