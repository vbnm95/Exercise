//import events from "events";
const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
	constructor(s, superstitious) {
		super();
		this.s = s;
		this.superstitious = !!superstitious;
	}
	
	go() {
		const countdown = this;
		const timeoutIds = [];
		return new Promise(function(resolve, reject) {
			for(let i=countdown.s; i>=0; i--) {
				timeoutIds.push( setTimeout(function() {
					if(countdown.superstitious && i===13) {
						timeoutIds.forEach(clearTimeout);
						reject(new Error("Error..."));
					} else if(i>0) { 
						countdown.emit("tick", i);
					} else {
						resolve("GO");
					}
				}, (countdown.s-i)*1000));
			}
		});
	}
}


function launch() {
	return new Promise(function(resolve, reject) {
		console.log("Lift off");
		if(Math.random()<0.5) return;
		setTimeout(function(){
			resolve("In orbit!");
		}, 2000);
	});
}


function addTimeout(fn, timeout=1000) {
	return function(...args) {
		return new Promise(function(resolve, reject) {
			const tid = setTimeout(reject, timeout, new Error("promise timed out"));
			
			fn(...args)
				.then(function(...args) {
					clearTimeout(tid);
					resolve(...args);
				})
				.catch(function(...args) {
					clearTimeout(tid);
					reject(...args);
				});
		});
	};
}


const c = new Countdown(3)
	.on("tick", function(i) {
		if(i>0) console.log(i + "...");
	});

c.go()
	.then(addTimeout(launch, 5*1000))
	//.then(launch)
	.then(function(msg) {
		console.log(msg + "success!");
	})
	.catch(function(err) {
		console.error("we have a problem: " + err.message);
	});