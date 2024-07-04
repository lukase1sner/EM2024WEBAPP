// script.js
const countdown = () => {
    const countDate = new Date("Jun 14, 2024 21:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Time calculations for days, hours, minutes and seconds
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate the difference in terms of days, hours, minutes, and seconds
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    // Update the HTML with the calculated values
    document.getElementById('days').innerText = textDay;
    document.getElementById('hours').innerText = textHour;
    document.getElementById('minutes').innerText = textMinute;
    document.getElementById('seconds').innerText = textSecond;
};

// Update the countdown every second
setInterval(countdown, 1000);
