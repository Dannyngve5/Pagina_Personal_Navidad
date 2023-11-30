const targetDate = new Date('2023-12-25T00:00:00');
const targetDateCum = new Date('2023-12-28T00:00:00');

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    document.getElementById('days').innerText = '00';
    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
  } else {
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById('days').innerText = days < 10 ? `0${days}` : days;
    document.getElementById('hours').innerText = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? `0${seconds}` : seconds;
  }
}

function updateCountdownCUM() {
  const currentDate = new Date();
  const timeDifference = targetDateCum - currentDate;

  if (timeDifference <= 0) {
    clearInterval(countdownCumInterval);
    document.getElementById('dayscum').innerText = '00';
    document.getElementById('hourscum').innerText = '00';
    document.getElementById('minutescum').innerText = '00';
    document.getElementById('secondscum').innerText = '00';
  } else {
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById('dayscum').innerText = days < 10 ? `0${days}` : days;
    document.getElementById('hourscum').innerText = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minutescum').innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('secondscum').innerText = seconds < 10 ? `0${seconds}` : seconds;
  }
}

// Actualizar cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);
const countdownCumInterval = setInterval(updateCountdownCUM, 1000);

// Llamar a las funciones por primera vez para evitar un retraso de un segundo
updateCountdown();
updateCountdownCUM();

// Agregar eventos a los botones de "Ver código"
document.getElementById('btnDays').addEventListener('click', function() {
  const seconds = document.getElementById('seconds').innerText;
  if (parseInt(seconds) === 0) {
    alert('El código es "7391"');
  } else {
    alert('Aún no es hora');
  }
});

document.getElementById('btnDaysCum').addEventListener('click', function() {
  const daysCum = document.getElementById('dayscum').innerText;
  if (parseInt(daysCum) === 0) {
    alert('El código es "8690"');
  } else {
    alert('Aún no es hora');
  }
});

document.getElementById('btnLink').addEventListener('click', function() {
  
  window.open('https://www.google.com', '_blank');
});
