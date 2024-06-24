var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
//event.js 文件
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
    console.log('some_event 事件触发'); 
}); 
setTimeout(function() { 
    event.emit('some_event'); 
}, 1000); 


const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

console.log(json);

const copy = JSON.parse(json,(key,value) => {
    return value && value.type === 'Buffer' ?
      Buffer.from(value.data) :
      value;
  });

console.log(copy);

class Hello {
    constructor() {
        var name;
        this.setName = function (thyName) {
            name = thyName;
        };
        this.sayHello = function () {
            console.log('Hello ' + name);
        };
    }
}; 
module.exports = Hello;

//var aa = require('./Hello'); 
dd = new Hello(); 
dd.setName('BYVoid'); 
dd.sayHello(); 

//console.trace();

const util = require('util');
async function fn(){
    return 'hello world';
}

const callbackFunction = util.callbackify(fn);
callbackFunction((err,ret) =>{
    if(err) throw err;
    console.log(ret);
})