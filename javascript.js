const characterName = document.querySelector(".character-name");
const classification = document.querySelector(".classification");
const description = document.querySelector(".description");

const speed = document.querySelector(".stat-fill-s");
const intelligence = document.querySelector(".stat-fill-i");
const charisma = document.querySelector(".stat-fill-c");
const fragility = document.querySelector(".stat-fill-f");
const leadership = document.querySelector(".stat-fill-l");

const characterImage = document.querySelector(".character-img");

const otherImage1 = document.querySelector(".other-img1");
const otherName1 = document.querySelector(".other-name1");
const otherKind1 = document.querySelector(".other-kind1");

const otherImage2 = document.querySelector(".other-img2");
const otherName2 = document.querySelector(".other-name2");
const otherKind2 = document.querySelector(".other-kind2");

const firstBtn = document.querySelector(".read-more");
const secondBtn = document.querySelector(".read-more-2");

//-------------------------------------------------------
//              MAKING JUMPING PICTURE STOP
//-------------------------------------------------------
characterImage.addEventListener("click", () => {
	characterImage.classList.toggle("is-paused");
});

//--------------------------------------------------------
//              WHEN FIRST ADD CLICKED ("READ ME")
//--------------------------------------------------------
firstBtn.addEventListener("click", function () {
	//-------------------------------------------------------=
	//              IF KROSH IS IN THE 1 ADD
	//--------------------------------------------------------
	if (otherName1.textContent === "KROSH") {
		//if Sovunya is in the main page
		if (characterName.textContent === "SOVUNYA.") {
			otherImage1.src = "./assets/images/sovunya.png";
			otherName1.textContent = "SOVUNYA";
			otherKind1.textContent = "OWL";

			firstBtn.style.right = "-2.1rem";
		}
		//if Karich is in the main page
		else if (characterName.textContent === "KARICH.") {
			otherImage1.src = "./assets/images/Karich.png";
			otherName1.textContent = "KARICH";
			otherKind1.textContent = "RAVEN";

			firstBtn.style.right = "-4.1rem";
		}
		//----------------------------------------------------
		//          PUTTING KROSH IN THE MAIN PAGE
		//-----------------------------------------------------
		characterName.textContent = "KROSH.";
		classification.textContent = "RABBIT";
		description.textContent =
			"Krosh is one of the main characters of the animated franchiseSmeshariki, a cheerful and energetic male rabbit who lives in the Chamomile Valley along with other Smeshariki.";

		speed.style = "width: 90%";
		intelligence.style = "width: 70%";
		charisma.style = "width: 75%";
		fragility.style = "width: 15%";
		leadership.style = "width: 75%";

		characterImage.src = "./assets/images/krash.png";
	}

	//-------------------------------------------------------=
	//              IF SOVUNYA IS IN THE 1 ADD
	//--------------------------------------------------------
	else if (otherName1.textContent === "SOVUNYA") {
		//if Krosh is in the main page
		if (characterName.textContent === "KROSH.") {
			otherImage1.src = "./assets/images/krash.png";
			otherName1.textContent = "KROSH";
			otherKind1.textContent = "RABBIT";

			firstBtn.style.right = "-5.1rem";
		}
		//if Karich is in the main page
		else if (characterName.textContent === "KARICH.") {
			otherImage1.src = "./assets/images/Karich.png";
			otherName1.textContent = "KARICH";
			otherKind1.textContent = "RAVEN";

			firstBtn.style.right = "-4.1rem";
		}

		//----------------------------------------------------
		//          PUTTING SOVUNYA IN THE MAIN PAGE
		//-----------------------------------------------------

		characterName.textContent = "SOVUNYA.";
		classification.textContent = "OWL";
		description.textContent =
			"Sovunya is an owl who is a doctor in Chamomile valley. In the first episodes, she was shown as a wise owl needlewoman who rarely leaves her tree house. Over time, she began to go out more often and hang out with the others.";

		speed.style = "width: 25%";
		intelligence.style = "width: 45%";
		charisma.style = "width: 85%";
		fragility.style = "width: 35%";
		leadership.style = "width: 55%";

		characterImage.src = "./assets/images/sovunya.png";
	}

	//-------------------------------------------------------=
	//              IF KARICH IS IN THE 1 ADD
	//--------------------------------------------------------
	else if (otherName1.textContent === "KARICH") {
		//if Krosh is in the main page
		if (characterName.textContent === "KROSH.") {
			otherImage1.src = "./assets/images/krash.png";
			otherName1.textContent = "KROSH";
			otherKind1.textContent = "RABBIT";

			firstBtn.style.right = "-5.1rem";
		} //if Sovunya is in the main page
		else if (characterName.textContent === "SOVUNYA.") {
			otherImage1.src = "./assets/images/sovunya.png";
			otherName1.textContent = "SOVUNYA";
			otherKind1.textContent = "OWL";

			firstBtn.style.right = "-2.1rem";
		}

		//----------------------------------------------------
		//          PUTTING KARICH IN THE MAIN PAGE
		//-----------------------------------------------------

		characterName.textContent = "KARICH.";
		classification.textContent = "RAVEN";
		description.textContent =
			"Karich is one of the main characters of the animated franchise Smeshariki, an elderly raven. The most artistic among the main characters. He traveled a lot in his youth. He plays the piano, cello  and gives singing lessons to other Smeshariks.";

		speed.style = "width: 25%";
		intelligence.style = "width: 85%";
		charisma.style = "width: 75%";
		fragility.style = "width: 55%";
		leadership.style = "width: 95%";

		characterImage.src = "./assets/images/Karich.png";
	}
});

//--------------------------------------------------------
//              WHEN SECOND ADD CLICKED ("READ ME")
//--------------------------------------------------------
secondBtn.addEventListener("click", function () {
	//-------------------------------------------------------=
	//              IF KROSH IS IN THE 2 ADD
	//--------------------------------------------------------
	if (otherName2.textContent === "KROSH") {
		//if Sovunya is in the main page
		if (characterName.textContent === "SOVUNYA.") {
			otherImage2.src = "./assets/images/sovunya.png";
			otherName2.textContent = "SOVUNYA";
			otherKind2.textContent = "OWL";

			secondBtn.style.right = "-2.1rem";
		}
		//if Karich is in the main page
		else if (characterName.textContent === "KARICH.") {
			otherImage2.src = "./assets/images/Karich.png";
			otherName2.textContent = "KARICH";
			otherKind2.textContent = "RAVEN";

			secondBtn.style.right = "-5.1rem";
		}
		//----------------------------------------------------
		//          PUTTING KROSH IN THE MAIN PAGE
		//-----------------------------------------------------
		characterName.textContent = "KROSH.";
		classification.textContent = "RABBIT";
		description.textContent =
			"Krosh is one of the main characters of the animated franchiseSmeshariki, a cheerful and energetic male rabbit who lives in the Chamomile Valley along with other Smeshariki.";

		speed.style = "width: 90%";
		intelligence.style = "width: 70%";
		charisma.style = "width: 75%";
		fragility.style = "width: 15%";
		leadership.style = "width: 75%";

		characterImage.src = "./assets/images/krash.png";
	}

	//-------------------------------------------------------=
	//              IF SOVUNYA IS IN THE 2 ADD
	//--------------------------------------------------------
	else if (otherName2.textContent === "SOVUNYA") {
		//if Krosh is in the main page
		if (characterName.textContent === "KROSH.") {
			otherImage2.src = "./assets/images/krash.png";
			otherName2.textContent = "KROSH";
			otherKind2.textContent = "RABBIT";

			secondBtn.style.right = "-5.1rem";
		}
		//if Karich is in the main page
		else if (characterName.textContent === "KARICH.") {
			otherImage2.src = "./assets/images/Karich.png";
			otherName2.textContent = "KARICH";
			otherKind2.textContent = "RAVEN";

			secondBtn.style.right = "-3.1rem";
		}

		//----------------------------------------------------
		//          PUTTING SOVUNYA IN THE MAIN PAGE
		//-----------------------------------------------------

		characterName.textContent = "SOVUNYA.";
		classification.textContent = "OWL";
		description.textContent =
			"Sovunya is an owl who is a doctor in Chamomile valley. In the first episodes, she was shown as a wise owl needlewoman who rarely leaves her tree house. Over time, she began to go out more often and hang out with the others.";

		speed.style = "width: 35%";
		intelligence.style = "width: 45%";
		charisma.style = "width: 85%";
		fragility.style = "width: 35%";
		leadership.style = "width: 55%";

		characterImage.src = "./assets/images/sovunya.png";
	}

	//-------------------------------------------------------=
	//              IF KARICH IS IN THE 2 ADD
	//--------------------------------------------------------
	else if (otherName2.textContent === "KARICH") {
		//if Krosh is in the main page
		if (characterName.textContent === "KROSH.") {
			otherImage2.src = "./assets/images/krash.png";
			otherName2.textContent = "KROSH";
			otherKind2.textContent = "RABBIT";

			secondBtn.style.right = "-5.1rem";
		} //if Sovunya is in the main page
		else if (characterName.textContent === "SOVUNYA.") {
			otherImage2.src = "./assets/images/sovunya.png";
			otherName2.textContent = "SOVUNYA";
			otherKind2.textContent = "OWL";

			secondBtn.style.right = "-2.1rem";
		}

		//----------------------------------------------------
		//          PUTTING KARICH IN THE MAIN PAGE
		//-----------------------------------------------------

		characterName.textContent = "KARICH.";
		classification.textContent = "RAVEN";
		description.textContent =
			"Karich is one of the main characters of the animated franchise Smeshariki, an elderly raven. The most artistic among the main characters. He traveled a lot in his youth. He plays the piano, cello  and gives singing lessons to other Smeshariks.";

		speed.style = "width: 25%";
		intelligence.style = "width: 85%";
		charisma.style = "width: 75%";
		fragility.style = "width: 55%";
		leadership.style = "width: 95%";

		characterImage.src = "./assets/images/Karich.png";
	}
});
