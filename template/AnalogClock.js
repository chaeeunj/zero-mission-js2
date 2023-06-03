const AnalogClock = ($container) => {
  const addClockElements = () => {
    // const clocks = document.querySelectorAll('.analog-clock');
    const clockElements = `
      <div class="hand hour"></div>
      <div class="hand minute"></div>
      <div class="hand second"></div>
      <div class="time time1">|</div>
      <div class="time time2">|</div>
      <div class="time time3">|</div>
      <div class="time time4">|</div>
      <div class="time time5">|</div>
      <div class="time time6">|</div>
      <div class="time time7">|</div>
      <div class="time time8">|</div>
      <div class="time time9">|</div>
      <div class="time time10">|</div>
      <div class="time time11">|</div>
      <div class="time time12">|</div>
    `;

    // clocks.forEach((clock) => {
    //   clock.innerHTML = clockElements;
    // });
    $container.innerHTML = clockElements;
  };

  const moveClock = () => {
    let date = new Date();

    let sec = date.getSeconds();
    let secAngle = sec * 6;
    document.querySelectorAll('.second').forEach((eachSecond) => {
      eachSecond.style.setProperty('--deg', secAngle);
    });
    // document.querySelector('.second').style.setProperty('--deg', secAngle);

    let min = date.getMinutes();
    let minAngle = min * 6;
    document.querySelectorAll('.minute').forEach((eachMinute) => {
      eachMinute.style.setProperty('--deg', minAngle);
    });
    // document.querySelector('.minute').style.setProperty('--deg', minAngle);

    let hour = date.getHours();
    let hourAngle = hour * 30 + min * 0.5;
    document.querySelectorAll('.hour').forEach((eachHour) => {
      eachHour.style.setProperty('--deg', hourAngle);
    });
    // document.querySelector('.hour').style.setProperty('--deg', hourAngle);

    setTimeout(moveClock, 1000);
  };

  const init = () => {
    window.addEventListener('DOMContentLoaded', () => {
      addClockElements();
      moveClock();
    });
  };

  init();
};

export default AnalogClock;
