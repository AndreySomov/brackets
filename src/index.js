module.exports = function check(str, bracketsConfig) {
	let open = [], close = [];

	bracketsConfig.forEach(item=>{
		open.push(item[0]);
		close.push(item[1]);
	})

	let arr = str.split("");
	
	for(let i=1; i<arr.length; i++){

		let cloneI = i-1;
		if(close.includes(arr[i])){

			while(cloneI>=0){
				if(arr[cloneI]){
					if(open.indexOf(arr[cloneI]) == close.indexOf(arr[i])){
						arr[cloneI] = 0;
						arr[i] = 0;
					}
					break;
				}
				cloneI--;
			}
		}
	}
	
	return arr.reduce((a, b) => a + b) === 0 ? true : false;
}
