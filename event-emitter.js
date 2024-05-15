// event driven listener
const { log } = require('node:console');
const EventEmiter=require('node:events');
const myEmiter=new EventEmiter();

// listener1
myEmiter.on('birthday',()=>{
    console.log('Hpy Bdy To U');
})

// listener2
myEmiter.on('birthday',(a)=>{
    console.log(`I will send U gift  a ${a}`);
})
myEmiter.emit('birthday','bike')