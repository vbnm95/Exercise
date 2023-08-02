function countdown(s) {
	return new Promise(function(resolve, reject) {
		//let i;
		for(let i=s; i>=0; i--) {
			setTimeout(function() {
				if(i>0 && i!==13) console.log(i + "...");
				else if(i===13) reject(new Error("Error..."));
				else resolve("GO!");
			}, (s-i)*1000);
		}
	});
}

//countdown(15).then(()=>console.log("countdown success"), (err)=>console.error("countdown success" + err.message));

countdown(5)
	.then(function(value) {
		console.log(value);
	})
	.catch(function(err) {
		console.error(err.message);
	});