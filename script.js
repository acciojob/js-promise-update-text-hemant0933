//your JS code here. If required.
let output = document.getElementById('output');
function ResolvePromise(){
	return new Promise((resolve,reject)=>{
		resolve(setTimeout(()=>{
			output.innerHTML = 'Hello, world!'
		} , 1000))
	})
}