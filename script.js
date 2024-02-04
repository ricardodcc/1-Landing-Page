const companies = ['A ACNE Co', 'ACME Co', 'ACME fog', 'ACME TV', 'ACME'];
let currentImg = 0;
let random = 0;
const UpdateCompanies = () => {
	for (let i = 0; i < 5; i++) {
		// with this approach, we don't have to write an image for the same image
		do {
			const random = Math.floor(Math.random() * companies.length);
			console.log(random);
			currentImg = document.querySelector(`.client--${i + 1}`).children[0].src.split('/')[5];
			console.log(currentImg + ' / ' + companies[random]);
			if (currentImg !== companies[random]) {
				document.querySelector(`.client--${i + 1}`).children[0].src = `images/Companies Slider/${companies[random]}.png`;
			}
		} while (currentImg === companies[random]);
	}
};

// function to set the remaining time in the counter
const CheckNumber = number => {
	return number <= 9 ? `0${number}` : number;
};
// function to do the counterdown from the newsletter section
const countDown = () => {
	const displayDays = document.querySelector('.display-days');
	const displayHours = document.querySelector('.display-hours');
	const displayMinutes = document.querySelector('.display-minutes');
	const displaySeconds = document.querySelector('.display-seconds');

	const currentDate = new Date().getTime();
	const launchDate = new Date('Feb 20, 2024, 22:00:00').getTime();
	const countDownDate = launchDate - currentDate;

	// calcular os dispatchEvent, horas, minutos e segundos com base na diferença de tempo
	const days = Math.floor(countDownDate / (1000 * 60 * 60 * 24));
	const hours = Math.floor((countDownDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((countDownDate % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((countDownDate % (1000 * 60)) / 1000);

	displayDays.textContent = CheckNumber(days);
	displayHours.textContent = CheckNumber(hours);
	displayMinutes.textContent = CheckNumber(minutes);
	displaySeconds.textContent = CheckNumber(seconds);
};

countDown();
//tem dois args, 1º- func e 2º- temp em milisegundos
setInterval(countDown, 1000);
setInterval(UpdateCompanies, 2000);
