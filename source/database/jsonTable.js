const {writeFileSync,readFileSync} = require('fs');
const {join} = require('path');

let model = function (jsonModel=""){
	let config = {}
	config.filePath = join(__dirname,jsonModel +'.json')
	config.all = function(){
		let file = readFileSync(this.filePath)
		return JSON.parse(file)
	}
	config.create = function (data){
		let all = this.all()
		let add = {
			id: all.length == 0 ? 1 : all[all.length - 1].id + 1,
			...data
		}
		all.push(add)
		writeFileSync(this.filePath,JSON.stringify(all,null,2))
		return add.id
	}
    
    
	return config
} 

module.exports = model;


 
        