function myFirstApp(name,age) {

	alert("Привет, меня зовут "+ name + " и это моя первая программа!");

	function showSkills(){
		let skills = ['HTML', 'CSS', 'Pascal', 'Lightroom'];

		for (let i = 0; i < skills.length; i++) {
			document.write("Я владею " + skills[i] + " ");
		}
	}
	showSkills();

	function checkAge() {
		if (age > 18) {
			alert("Ты готов изучать JavaScript")
		} else {
			alert("Ты не готов изучать JavaScript")
		}
	}
	checkAge()

	function calcPow(num) {
		let numPow = alert(num*num);
	}
	calcPow(4);
}

myFirstApp("Artur", 19);