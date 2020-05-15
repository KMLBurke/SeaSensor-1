var Blynk = require("blynk-library")
var AUTH = 'XCoHOkgJZTHvirwXnWy3vg56YimdBGru';
var blynk = new Blynk.Blynk(AUTH);
var v1 = new blynk.VirtualPin(1);
var v2 = new blynk.VirtualPin(2);
var v3 = new blynk.VirtualPin(3);
var request = require('request');
var URL = 'https://erddap.marine.ie//erddap/tabledap/IWBNetwork.json?&station_id="M5"&orderByMax("time")';

v1.on('read', function(){
    request({
        url: URL,
        method: 'GET',
    }, function (error, response, body){
        if (!error && response.statusCode == 200) {
            var data=JSON.parse(body)
            temperatureSea = data.table.rows[0][15]
            console.log("Sea Temperature: "+ temperatureSea)
            v1.write(temperatureSea);
            }
        });
    });

v2.on('read', function(){
    request({
        url: URL,
        method: 'GET',
    }, function (error, response, body){
        if (!error && response.statusCode == 200) {
            var data=JSON.parse(body)
            temperatureAir = data.table.rows[0][13]
            console.log("Air Temperature: "+ temperatureAir)
            v2.write(temperatureAir);
            }
        });
    });

v3.on('read', function(){
    request({
        url: URL,
        method: 'GET',
    }, function (error, response, body){
        if (!error && response.statusCode == 200) {
            var data=JSON.parse(body)
            time = data.table.rows[0][4]
            console.log("Time: "+ time)
            v3.write(time);
            }
        });
    });

