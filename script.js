//your JS code here. If required.

function ResolvePromise(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve( 'Hello, world!');
		} , 1000)
	})
}

ResolvePromise.then((result)=>{
	  const outputElement = document.getElementById("output");
	  outputElement.textContent = result;
})