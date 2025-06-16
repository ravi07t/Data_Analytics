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
const track = document.getElementById('carouselTrack');
const nav = document.getElementById('carouselNav');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cards = document.querySelectorAll('.card');

let slidesPerGroup;
let cardWidth;
let totalGroups;
let currentGroup = 0;

function updateSettings() {
  const screenWidth = window.innerWidth;

  slidesPerGroup = screenWidth <= 768 ? 1 : 3;

  cardWidth = cards[0].offsetWidth + 20; // card width + margin
  totalGroups = Math.ceil(cards.length / slidesPerGroup);

  generateDots();
  goToGroup(0);
}

function generateDots() {
  nav.innerHTML = ''; // Clear old dots
  for (let i = 0; i < totalGroups; i++) {
    const dot = document.createElement('button');
    dot.classList.add('nav-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToGroup(i));
    nav.appendChild(dot);
  }
}

function goToGroup(index) {
  currentGroup = index;
  const translateX = index * slidesPerGroup * cardWidth;
  track.style.transform = `translateX(-${translateX}px)`;
  updateDots();
}

function updateDots() {
  document.querySelectorAll('.nav-dot').forEach(dot => dot.classList.remove('active'));
  document.querySelectorAll('.nav-dot')[currentGroup]?.classList.add('active');
}

prevBtn.addEventListener('click', () => {
  if (currentGroup > 0) {
    goToGroup(currentGroup - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentGroup < totalGroups - 1) {
    goToGroup(currentGroup + 1);
  }
});

// Recalculate settings on load and resize
window.addEventListener('load', updateSettings);
window.addEventListener('resize', () => {
  // Debounce resize for performance
  clearTimeout(window.resizeTimeout);
  window.resizeTimeout = setTimeout(updateSettings, 150);
});






// /* ----------------------------------------------------------------------------- */

//         /* <!-- -----------Batch schedule--------- --> */
  




//         /* ------------------------------------------------------------------------- */

//         /* <!-- --------Data Analytics Course Syllabus---------- --> */





//        /* -------------------------------------------------------------------------- */

//         /* <!-- -----------Placement Companies----------- --> */






// /* ----------------------------------------------------------------------------------- */

//         /* <!-- ----------Our Students Review-------------- --> */


const slides = document.querySelectorAll('.carousel3d-slide');
    const dots   = document.querySelectorAll('.dot');
    const preBtn= document.querySelector('.prev');
    const nexBtn= document.querySelector('.next');

    let current = 2;                 // start with middle slide

    /** Position / style every slide based on offset */
    function render(){
      slides.forEach((slide,i)=>{
        const offset = i - current;  // –2 –1 0 1 2 …
        const distance = offset * 260;   // horizontal separation
        const scale    = offset===0?1:0.8;
        const blur     = offset===0?0:6;
        const opacity  = offset===0?1:0.45;
        const z        = offset===0?2:1;

        slide.style.transform =
          `translate(-50%,-50%) translateX(${distance}px) scale(${scale}) translateZ(${offset===0?0:-200}px)`;
        slide.style.filter = `blur(${blur}px)`;
        slide.style.opacity = opacity;
        slide.style.zIndex = z;
      });
      dots.forEach((d,i)=>d.classList.toggle('active',i===current));
    }

    /* --------- NAVIGATION --------- */
    function goto(idx){
      current = (idx + slides.length) % slides.length;
      render();
    }
    preBtn.onclick = ()=>goto(current-1);
    nexBtn.onclick = ()=>goto(current+1);
    dots.forEach((d,i)=>d.onclick = ()=>goto(i));

    render();



// /* --------------------------------------------------------------------------------- */

//         /* <!-- -----------Get Certificate---------- --> */






// /* -------------------------------------------------------------------------------- */

//         /* <!-- ---------Frequently Asked Questions------------ --> */





// /* ----------------------------------------------------------------------------------- */

//         /* <!-- -----------Lanunch your text career today--------------- --> */




// /* -------------------------------------------------------------------------- */