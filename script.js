// /* ------------------Navbar -------------------- */





// /* ------------------------------------------------------------------------ */

//         /* <!-- --------Home page--------- --> */

function startCountdown(endDate) {
  function updateDigits(unit, value) {
    const valStr = value.toString().padStart(2, '0');

    const digit1 = document.getElementById(`${unit}-1`);
    const digit2 = document.getElementById(`${unit}-2`);

    digit1.textContent = valStr[0];
    digit2.textContent = valStr[1];

    // Apply red color to seconds only
    if (unit === "seconds") {
      digit1.style.color = "red";
      digit2.style.color = "red";
    } else {
      digit1.style.color = "";
      digit2.style.color = "";
    }
  }

  function updateTimer() {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    updateDigits("days", days);
    updateDigits("hours", hours);
    updateDigits("minutes", minutes);
    updateDigits("seconds", seconds);
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// Set countdown to 17 days from now
const offerEnd = new Date();
offerEnd.setDate(offerEnd.getDate() + 17);
startCountdown(offerEnd.getTime());





// /* ----------------------------------------------------------------------- */

//         /* <!-- ---------Data Analytics Course Overview-------- --> */





// /* -------------------------------------------------------------------------- */
//         /* <!-- -----------Journey Of Our Learners--------------- --> */






// /* ----------------------------------------------------------------------------- */

//         /* <!-- -----------Batch schedule--------- --> */
  




//         /* ------------------------------------------------------------------------- */

//         /* <!-- --------Data Analytics Course Syllabus---------- --> */





//        /* -------------------------------------------------------------------------- */

//         /* <!-- -----------Placement Companies----------- --> */






// /* ----------------------------------------------------------------------------------- */

//         /* <!-- ----------Our Students Review-------------- --> */






// /* --------------------------------------------------------------------------------- */

//         /* <!-- -----------Get Certificate---------- --> */






// /* -------------------------------------------------------------------------------- */

//         /* <!-- ---------Frequently Asked Questions------------ --> */





// /* ----------------------------------------------------------------------------------- */

//         /* <!-- -----------Lanunch your text career today--------------- --> */




// /* -------------------------------------------------------------------------- */