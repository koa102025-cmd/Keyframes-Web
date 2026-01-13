const img = document.querySelector(".character-img");

img.addEventListener("click", () => {
	img.classList.toggle("is-paused");
});
