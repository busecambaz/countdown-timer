const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");

const newYears = "1 Jan 2023";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date(); //JavaScript tarih nesnesi new Date() ile oluşturulur.

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24); // math.floor  asagi yuvarlamak icin
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysE1.innerHTML = days;
  hoursE1.innerHTML = formatTime(hours);
  minutesE1.innerHTML = formatTime(minutes);
  secondsE1.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000); //setInterval  amacı belirttiğimiz süre içerisinde sürekli olarak belirttiğim işleri yapması kısacası otomatik olarak kod bloklarımızı işletmek için kullanmaktayız. (her üç saniyede bir ekrana Merhaba mesajı çıkart)
