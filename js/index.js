const scroll = ['home', 'about', 'videos', 'contacts'];


var nav = document.getElementsByClassName("navigation")[0];

function navigate(x) {
    for (i = 0; i < tagNames.length; i++) {
        const tempTag = tagNames[i];
        document.getElementById(tempTag).style.opacity = 0;
        setTimeout(() => {
            document.getElementById(tempTag).style.display = 'none';
        }, 100);
    }
    
    document.getElementsByTagName('html')[0].style.height = 'initial';
    document.getElementsByTagName('html')[0].style.overflowY = 'auto';

    document.getElementById('home').style.opacity = 1;
    document.getElementById('about').style.opacity = 1;
    
    // location.hash = scroll[x];
    window.scrollTo(0, window.innerHeight * x)
    if (document.documentElement.scrollWidth < 500) {
        closeNav();
    } else {
        const hamIcon = document.getElementsByClassName('toggle-icon')[0];
        const sideBar = document.getElementsByClassName('side-bar')[0];
        hamIcon.classList.remove("pushed");
        sideBar.style.transform = "translateX(25vw)";
        document.getElementsByClassName('backdrop')[0].style.display = 'none';
    }
    var navItems = document.querySelectorAll(".navigation .nav-item");
    if (window.innerWidth < 600) {
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].style.display = "inline-block";
        }
    } else {
        navItems[0].style.display = "inline-block";
        navItems[2].style.display = "inline-block";
        navItems[3].style.display = "inline-block";
    }
    const hamItems = document.querySelectorAll('.side-bar .nav-item');
    hamItems[0].style.display = "none";
    hamItems[2].style.display = "none";
    hamItems[3].style.display = "none";
}

function openNav() {
    window.scrollTo(0, 0);
    nav.style.transform = "translateX(0)";
    document.getElementsByTagName('html')[0].style.height = '100vh';
    document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
    document.getElementsByClassName('backdrop')[0].style.display = 'block';
}

function closeNav() {
    nav.style.transform = "translateX(-100vw)";
    document.getElementsByTagName('html')[0].style.height = 'initial';
    document.getElementsByTagName('html')[0].style.overflowY = 'scroll';
    document.getElementsByClassName('backdrop')[0].style.display = 'none';
}


if (window.innerWidth < 500) {
    let initialXContact = null;
    let initialYContact = null;

    function startTouchContact(e) {
        initialXContact = e.touches[0].clientX;
        initialYContact = e.touches[0].clientY;
    };

    function moveTouchContact(e) {

        if (initialXContact === null) {
            return;
        }

        if (initialYContact === null) {
            return;
        }

        let currentX = e.touches[0].clientX;
        let currentY = e.touches[0].clientY;

        let diffX = initialXContact - currentX;
        let diffY = initialYContact - currentY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            // sliding horizontally
            if (diffX > 0) {
                // swiped left
                closeNav();
            } else {
                // swiped right
                openNav();
            }
        }
        initialXContact = null;
        initialYContact = null;

        e.preventDefault();

    };


    document.getElementById('home').addEventListener("touchstart", startTouchContact, false);
    document.getElementById('home').addEventListener("touchmove", moveTouchContact, false);
    document.getElementsByClassName('navigation')[0].addEventListener("touchstart", startTouchContact, false);
    document.getElementsByClassName('navigation')[0].addEventListener("touchmove", moveTouchContact, false);
    document.getElementsByClassName('backdrop')[0].addEventListener("touchstart", startTouchContact, false);
    document.getElementsByClassName('backdrop')[0].addEventListener("touchmove", moveTouchContact, false);
    document.getElementsByClassName('spons-wrapper')[0].addEventListener("touchstart", startTouchContact, false);
    document.getElementsByClassName('spons-wrapper')[0].addEventListener("touchmove", moveTouchContact, false);
}


window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}


const tagNames = ['events', 'sponsors', 'past-sponsors', 'developers'];
function openTags(tagName) {
    for (i = 0; i < tagNames.length; i++) {
        const tempTag = tagNames[i];
        if (tempTag != tagName) {
            document.getElementById(tempTag).style.opacity = 0;
            setTimeout(() => {
                document.getElementById(tempTag).style.display = 'none';
            }, 100);
        }
    }
    document.getElementsByClassName('backdrop')[0].style.display = 'none';
    document.getElementById('home').style.opacity = 0;
    document.getElementById('about').style.opacity = 0;
    var tagPage = document.getElementById(tagName);
    tagPage.style.display = 'block';
    setTimeout(() => {
        tagPage.style.opacity = 1;
        document.getElementsByTagName('html')[0].style.height = '100vh';
        document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    }, 100);

    if (window.innerWidth < 600) {
        closeNav();
    } else {        
        const hamIcon = document.getElementsByClassName('toggle-icon')[0];
        const sideBar = document.getElementsByClassName('side-bar')[0];
        hamIcon.classList.remove("pushed");
        sideBar.style.transform = "translateX(25vw)";
    }
    
    setTimeout(() => {
        const hamItems = document.querySelectorAll('.side-bar .nav-item');
        hamItems[0].style.display = "inline-block";
        hamItems[2].style.display = "inline-block";
        hamItems[3].style.display = "inline-block";
    }, 100);

    var navItems = document.querySelectorAll(".navigation .nav-item");

    if (window.innerWidth > 600) {
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].style.display = "none";
        }
    }
}



"use strict";

// loader
let loaderWrapper = document.getElementById("loader-wrapper");
let mainLoader = document.getElementById("main-loader");
let oasisTitle = document.getElementsByClassName("oasis-li");
let oasisSlogan = document.getElementById("oasis-slogan");
let oasisText = document.getElementById("oasis-text");
let oasisDate = document.getElementById("oasis-date");
let contentWrapper = document.getElementById("content-wrapper");

let about = document.getElementsByClassName("about")[0];
let landingWrapper = document.getElementsByClassName("landing-wrapper")[0];
let navigation = document.getElementsByClassName("navigation")[0];
let register = document.getElementsByClassName("mobile-register")[0];
let hamIcon = document.getElementsByClassName("toggle-icon")[0];

landingWrapper.style.transition = "opacity ease-out 0.5s"; // fade-in effect for content on loading
about.style.transition = "opacity ease-out 0.5s"; // fade-in effect for content on loading
navigation.style.transition = "ease-in-out 0.5s"; // fade-in effect for content on loading
register.style.transition = "opacity ease-out 0.5s";
hamIcon.style.transition = "opacity ease-out 0.5s";
document.getElementById('hamburger').style.transition = "opacity ease-out 0.5s";
document.getElementsByClassName('mobile-register')[0].style.transition = "opacity ease-out 0.5s";

window.onload = function() {
    for (let i = 0; i < oasisTitle.length; i++)
        oasisTitle[i].classList.add("title-smoke");
    oasisSlogan.classList.add("slogan-fade-in");
    loaderWrapper.classList.add("wrapper-fade-out");
    mainLoader.classList.add("loader-transition");
    oasisText.classList.add("text-fade-out");
    oasisDate.classList.add("text-fade-out");

    setTimeout(function() {
        loaderWrapper.style.display = "none";

        document.getElementsByTagName("body")[0].style.overflowY = "auto";
        loaderWrapper.style.display = "none";
        // document.getElementsByClassName("bottom-div")[0].style.opacity = "1";
        landingWrapper.style.opacity = 1;
        about.style.opacity = 1;
        navigation.style.opacity = 1;
        register.style.opacity = 1;
        hamIcon.style.opacity = 1;
        document.getElementById('hamburger').style.opacity = 1
        document.getElementsByClassName('mobile-register')[0].style.opacity = 1;
        document.getElementsByTagName('html')[0].style.height = 'initial';
        document.getElementsByTagName('html')[0].style.overflowY = 'auto';
        // document.getElementsByClassName("nav-bar")[0].style.display = "flex";
        // document.getElementsByClassName("sidebar")[0].style.display = "flex";
        // if (window.innerWidth > 500)
        //   document.getElementsByClassName("navigator")[0].style.display = "flex";
        // if (window.innerWidth < 500) {
        //   document.getElementsByClassName("navigator")[0].style.display = "none";
    }, 3500);
};


// -------------------------------------toggle desktop hamburger--------------------------------------------------
document.getElementsByClassName('toggle-icon')[0].addEventListener('click', toggleDesktopHam)
function toggleDesktopHam() {
    const hamIcon = document.getElementsByClassName('toggle-icon')[0];
    const sideBar = document.getElementsByClassName('side-bar')[0];
    if (hamIcon.classList.contains('pushed')) {
        hamIcon.classList.remove("pushed");
        sideBar.style.transform = "translateX(25vw)";
        document.getElementsByClassName('backdrop')[0].style.display = 'none';
        document.getElementsByTagName('html')[0].style.overflowY = 'auto';
    } else {
        hamIcon.classList.add('pushed');
        sideBar.style.transform = "translateX(0)";
        document.getElementsByClassName('backdrop')[0].style.display = 'block';
        document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
    }
}
/* =========================
   Smooth Scroll Transition:
   landing-wrapper -> about
   Insert at end of /mnt/data/index.js
   ========================= */

(function(){
  const topEl = document.querySelector('.landing-wrapper'); // landing hero
  const bottomEl = document.querySelector('.about');        // about section
  if(!topEl || !bottomEl) return; // safety

  // config (tweak these numbers if you want stronger effect)
  const cfg = {
    parallaxTop: 20,      // px translate up for landing when progress=1
    parallaxBottom: -28,  // px translate for about (moves opposite)
    scaleTop: 0.005,      // small scale increase for depth
    scaleBottom: 0.008,
    smoothing: 0.12       // lerp smoothing (0..1) smaller = softer
  };

  // state
  let targetProgress = 0;
  let currentProgress = 0;
  let raf = null;
  let ticking = false;

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a,b,t) => a + (b - a) * t;

  function calcProgress(){
    // We compute how far the user scrolled across the viewport area of the .about section
    // Use bounding rect so it's robust to different viewports
    const rect = bottomEl.getBoundingClientRect();
    const vh = window.innerHeight;
    // progress 0 when bottomEl top is at bottom of viewport,
    // progress 1 when bottomEl top is near top (you can tune)
    // Map rect.top from [vh -> -vh] -> [0..1]
    const start = vh * 0.0; // start when top hits viewport top
    const end   = vh * 0.9; // finish a bit before fully off
    // simpler mapping:
    const raw = 1 - clamp((rect.top - start) / (rect.height + (vh * 0.2) || 1), 0, 1);
    return clamp(raw, 0, 1);
  }

  function onScroll(){
    targetProgress = calcProgress();
    if(!ticking){
      ticking = true;
      raf = requestAnimationFrame(update);
    }
  }

  function update(){
    // smooth progress
    currentProgress = lerp(currentProgress, targetProgress, cfg.smoothing);
    const eased = 1 - Math.pow(1 - currentProgress, 1.8); // ease out

    // compute visual values
    const topOpacity = clamp(1 - eased * 1.05, 0, 1);
    const topY = - (eased * cfg.parallaxTop);
    const topScale = 1 + (currentProgress * cfg.scaleTop);

    const bottomOpacity = clamp(eased * 1.05, 0, 1);
    const bottomY = (1 - eased) * cfg.parallaxBottom;
    const bottomScale = 1 + (currentProgress * cfg.scaleBottom);

    // apply transforms
    topEl.style.opacity = topOpacity;
    topEl.style.transform = `translateY(${topY}px) scale(${topScale})`;

    bottomEl.style.opacity = bottomOpacity;
    bottomEl.style.transform = `translateY(${bottomY}px) scale(${bottomScale})`;

    // stop loop if close to target
    if(Math.abs(currentProgress - targetProgress) < 0.001){
      currentProgress = targetProgress;
      ticking = false;
      cancelAnimationFrame(raf);
      raf = null;
      return;
    }
    raf = requestAnimationFrame(update);
  }

  // initialize: ensure about is behind and hidden initially
  topEl.style.opacity = 1;
  topEl.style.transform = 'translateY(0) scale(1)';
  bottomEl.style.opacity = 0;
  bottomEl.style.transform = 'translateY(0) scale(1)';

  // event listeners
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);

  // reduced motion accessibility: if prefers-reduced-motion, make it a simple snap
  const mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if(mq && mq.matches){
    window.removeEventListener('scroll', onScroll);
    topEl.style.transition = 'opacity 200ms linear';
    bottomEl.style.transition = 'opacity 200ms linear';
    // decide initial state:
    const rect = bottomEl.getBoundingClientRect();
    if(rect.top < window.innerHeight * 0.5){
      topEl.style.opacity = 0;
      bottomEl.style.opacity = 1;
    } else {
      topEl.style.opacity = 1;
      bottomEl.style.opacity = 0;
    }
  }

  // initial run to set correct progress based on current scroll
  onScroll();
})();

