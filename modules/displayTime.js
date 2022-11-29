// Updated Task-5
// Added Current Date/Time
function displayTime() {
    const time = new Date();
    const day = time.getDate();
    const month = time.getMonth() + 1;
    const year = time.getFullYear();
    const currentDate = day + '/' + month + '/' + year;
  
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let en = 'AM';
    if (hrs > 12) {
      en = 'PM';
      hrs = hrs - 12;
  }
      if (hrs == 0) {
    hrs = 12;
  }
          if (hrs < 10) {
    hrs = '0' + hrs;
  }
      if (min < 10) {
    min = '0' + min;
  }
      if (sec < 10) {
    sec = '0' + sec;
  }
  document.getElementById('cDateTime').innerHTML = `Date/Time: ${currentDate} ${hrs}:${min}:${sec} ${en}`;
  };

  export default displayTime