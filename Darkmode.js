let checkbox = document.querySelector("#flexSwitchCheckDefault");
let p = document.querySelector("p");
checkbox.addEventListener("change", (e) => {
	if (e.target.checked) {
		document.body.classList.add("dark-mode");
		document.body.classList.remove("light-mode");
		p.innerText = "Dark Mode";
	} else {
		document.body.classList.add("light-mode");
		document.body.classList.remove("dark-mode");
		p.innerText = "Light Mode";
	}
});
