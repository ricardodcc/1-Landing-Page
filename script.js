const CheckNumber = number => {
	return number <= 9 ? `0${number}` : number;
};
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
