class Person {
	constructor(fullName, favColor) {
		this.name = fullName;
		this.favoriteColor = favColor;
	}

	greet() {
		console.log("Hi there, my name is" + this.name);
	}
}


export default Person;
