// theme stuff
themeCheck();

function themeCheck() {
	if (localStorage.getItem("theme") === null) {
		applyLightTheme();
	}

	if (localStorage.getItem("theme") === "light") {
		applyLightTheme();
	}

	if (localStorage.getItem("theme") === "dark") {
		applyDarkTheme();
	}
}

function applyLightTheme() {
	let button = document.getElementById("themeButton");
	let root = document.documentElement;

	localStorage.setItem("theme", "light");

	root.style.setProperty("--bg-color", "#f0f0f0");
	root.style.setProperty("--txt-color", "#333");
	root.style.setProperty("--border-color", "#ccc");
	root.style.setProperty("--less-color", "#aaa");

	button.innerHTML = ` <i class="fa-solid fa-moon"></i> `;
}

function applyDarkTheme() {
	let button = document.getElementById("themeButton");
	let root = document.documentElement;

	localStorage.setItem("theme", "dark");

	root.style.setProperty("--bg-color", "#0f0f0f");
	root.style.setProperty("--txt-color", "#ccc");
	root.style.setProperty("--border-color", "#333");
	root.style.setProperty("--less-color", "#555");

	button.innerHTML = ` <i class="fa-solid fa-sun"></i> `;
}

function themeToggle() {
	if (localStorage.getItem("theme") === "light") {
		applyDarkTheme();
	} else if (localStorage.getItem("theme") === "dark") {
		applyLightTheme();
	}
}
