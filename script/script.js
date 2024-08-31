const students = {
	name:"saurav ahshan",
	age:21,
	grade:3.45,
	subject:["math","physics","chemistry"],
	displayfunc:function() {
		console.log(this.name);
		console.log(this.age);
		console.log(this.grade);
		for(let i = 0; i < this.subject.length; i++) {
			console.log(this.subject[i]);
		}
	}

}

students.displayfunc();