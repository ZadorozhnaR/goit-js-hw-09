import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const btnStart = document.querySelector('button[data-start]');
const inputDate = document.querySelector('input#datetime-picker');
const TimerDays = document.querySelector('[data-days]');
const TimerHours = document.querySelector('[data-hours]');
const Timerminutes = document.querySelector('[data-minutes]');
const TimerSeconds = document.querySelector('[data-seconds]');

btnStart.addEventListener('click', timer);
btnStart.disabled = true;

let currentDate = null;
let selectedDate = null;
let remaining = 0;
const delay = 1000;
timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dateCheck(selectedDates);
  },
};

flatpickr(inputDate, options);

function dateCheck(selectedDates) {
  selectedDate = selectedDates[0].getTime();
  currentDate = new Date().getTime();
  if (selectedDates < currentDate) {
    window.alert('Please choose a date in the future');
  } else {
    btnStart.disabled = false;
  }
}

function timer() {
  timerId = setInterval(() => {
    currentDate = new Date().getTime();
    if (selectedDate - currentDate <= 1000) {
      clearInterval(timerId);
      btnStart.disabled = true;
      inputDate.disabled = false;
    } else {
      btnStart.disabled = true;
      inputDate.disabled = true;
      currentDate += 1000;
      remaining = Math.floor(selectedDate - currentDate);
      convertMs(remaining);
    }
  }, delay);
}

function createTime({ days, hours, minutes, seconds }) {
  TimerDays.textContent = days;
  TimerHours.textContent = hours;
  Timerminutes.textContent = minutes;
  TimerSeconds.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  createTime({ days, hours, minutes, seconds });
  return { days, hours, minutes, seconds };
}
