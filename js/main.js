let toggleMenu = document.querySelector(".toggle-menu");
toggleMenu.addEventListener("click", e => {
	e.currentTarget.classList.toggle("active");
})

// Infinite Slider

const images_holder = [...document.querySelectorAll(".partners .container .img-holder")];
let elWidth = 2;
setInterval(moveLeft, 1500);
function moveLeft() {
	console.log(elWidth);
	images_holder[0].style.marginLeft = `-${elWidth}00px`;
	elWidth += 2;
	if (elWidth === 20) {
		elWidth = 0;
	}
}

// Multiple Steps Form
// Select Buttons
let prev = document.getElementById("prev");
let next = document.getElementById("next");
// Select All Taps
let taps = document.querySelectorAll(".tap");
let tapIndex = 0;
showTap(tapIndex);

function showTap(n) {
	taps.forEach(tap => {
		tap.classList.remove("active");
	})
	if (n == 0) {
		prev.style.display = "none";
	} else {
		prev.style.display = "block";
	}
	if (n == taps.length - 1) {
		next.innerHTML = "Submit";
	} else {
		next.innerHTML = "Next";
	}
	taps[n].classList.add("active");
}

function nextPrev(n) {
	if (n == 1 && isValid()) {
		tapIndex += n;
		if (tapIndex >= taps.length) {
			document.getElementById("myForm").submit();
			return false;
		}
		showTap(tapIndex);
		let balls = document.getElementById("balls");
		let balls_lis = balls.getElementsByTagName("li");
		balls_lis[tapIndex - 1].classList.add("active")
	} else if (n == -1) {
		tapIndex += n;
		showTap(tapIndex);
		if (tapIndex == 0) {
			balls_lis[tapIndex - 1].classList.remove("active")
		}
	}
	else {
		return false;
  }
}
function isValid() {
	let valide = true;
	let currentTap = document.querySelector(".tap.active");
	let allInputs = currentTap.getElementsByTagName("input");
	for(let i = 0;i < allInputs.length; i++) {
		if (allInputs[i].value == "") {
			allInputs[i].classList.add("invalid");
			valide = false;
		} else {
			allInputs[i].classList.remove("invalid");
		}
	}
	if (tapIndex == 1) {
		let valideOne, valideTwo;
		// Email Input
		valideOne = allInputs[0].value.includes("@") && allInputs[0].value.includes(".") && (allInputs[0].value.slice(allInputs[0].value.indexOf("@"),).length > 1) && ((allInputs[0].value.slice(allInputs[0].value.indexOf("."),).length > 1));
		if (valideOne === false) {
			console.log(`ValideOne => ${valideOne}`);
			console.log("Email Input Must Have '@' and '.'");
		}
		// Number Input
		if(allInputs[1].value.search(allInputs[1].pattern) !== -1) {
			valideTwo = true;
		} else {
			valideTwo = false;
			console.log(`ValideTwo => ${valideTwo}`);
		};
		if (valideOne === true && valideTwo === true) {
			valide = true;
		} else {
			valide = false;
		}
	}
	if (tapIndex == 2) {
		let currentTap = document.querySelector(".tap.active");
		let allInputs = currentTap.getElementsByTagName("input");
		// UserName & Password
		if (allInputs[0].value.length <= 7 || allInputs[1].value.length <= 7) {
			valide = false;
		}
	}
	return valide; 
}







