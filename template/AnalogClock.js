const AnalogClock = ($container) => {
  // const appendClock = () => {
  //   const clock = document.createElement('div');
  //   clock.className = 'analog-clock';

  //   clock.innerHTML = `
  //     <div class="hand hour"></div>
  //     <div class="hand minute"></div>
  //     <div class="hand second"></div>
  //     <div class="time time1">|</div>
  //     <div class="time time2">|</div>
  //     <div class="time time3">|</div>
  //     <div class="time time4">|</div>
  //     <div class="time time5">|</div>
  //     <div class="time time6">|</div>
  //     <div class="time time7">|</div>
  //     <div class="time time8">|</div>
  //     <div class="time time9">|</div>
  //     <div class="time time10">|</div>
  //     <div class="time time11">|</div>
  //     <div class="time time12">|</div>
  //   `;

  //   $container.appendChild(clock);
  // };
  const addClockElements = () => {
    const clocks = document.querySelectorAll('.analog-clock');
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

    clocks.forEach((clock) => {
      clock.innerHTML = clockElements;
    });

    // setInterval(() => {
    //   const hour = document.querySelector('.hadn .hour');
    //   hour.style.setProperty('--deg', '1deg');
    // }, 1000);
  };

  const moveClock = () => {
    let date = new Date();

    let sec = date.getSeconds();
    let secAngle = 'rotate(' + sec * 6 + 'deg)';
    document.querySelectorAll('.second').forEach((eachSecond) => {
      eachSecond.style.transform = secAngle;
    });

    let min = date.getMinutes();
    let minAngle = 'rotate(' + min * 6 + 'deg)';
    document.querySelectorAll('.minute').forEach((eachMinute) => {
      eachMinute.style.transform = minAngle;
    });

    let hour = date.getHours();
    if (hour < 12) {
      hour = hour;
    } else {
      hour = hour - 12;
    }

    let hourAngle = 'rotate(' + hour * 30 + min * 0.5 + 'deg)';
    document.querySelectorAll('.hour').forEach((eachHour) => {
      eachHour.style.transform = hourAngle;
    });

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
