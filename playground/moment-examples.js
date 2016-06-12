var moment = require('moment');

// http://momentjs.com
//console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> -60

var now = moment();
console.log(now.unix());

var timestamp = 1465500027;
var timestamp2 = 1465500287;
var currentMoment = moment.unix(timestamp);

console.log(currentMoment.format('DD/MM/YYYY - h:mm:ss A'));
