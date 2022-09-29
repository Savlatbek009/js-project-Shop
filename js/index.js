window.addEventListener("DOMContentLoaded", function () {
  if (window.navigator.onLine) {
    // navigation func
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");
    const navigationItems = document.querySelectorAll(".navigation a");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    });

    navigationItems.forEach((navItem) => {
      navItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
      });
    });
    // scroll func
    const scrollBtn = document.querySelector(".scrollToTop-btn");
    window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      scrollBtn.classList.toggle("active", window.scrollY > 100);
      header.classList.toggle("sticky", window.scrollY > 0);
    });
    scrollBtn.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });

    window.addEventListener("scroll", () => {
      let reveals = document.querySelectorAll(".reveal");

      for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
        }
      }
    });
    // Show more photos func
    const btnTomoreF = document.querySelectorAll(".linkToMore")[0];
    const btnTomoreS = document.querySelectorAll(".linkToMore")[1];
    const btnToLessF = document.querySelectorAll(".linkToLess")[0];
    const btnToLessS = document.querySelectorAll(".linkToLess")[1];
    const addTure1 = document.querySelector(".addTure1");
    const addTure2 = document.querySelector(".addTure2");

    btnTomoreF.addEventListener("click", function (e) {
      e.preventDefault();
      addTure1.classList.add("d-block");
      addTure1.classList.remove("d-none");
      e.target.style.display = "none";

      btnToLessF.style.display = "block";
    });

    btnTomoreS.addEventListener("click", function (e) {
      e.preventDefault();
      addTure2.classList.add("d-block");
      addTure2.classList.remove("d-none");
      e.target.style.display = "none";

      btnToLessS.style.display = "block";
    });

    btnToLessF.addEventListener("click", function (e) {
      e.preventDefault();
      addTure1.classList.remove("d-block");
      addTure1.classList.add("d-none");
      e.target.style.display = "none";

      btnTomoreF.style.display = "block";
    });

    btnToLessS.addEventListener("click", function (e) {
      e.preventDefault();
      addTure2.classList.remove("d-block");
      addTure2.classList.add("d-none");
      e.target.style.display = "none";

      btnTomoreS.style.display = "block";
    });

    //scroll func
  } else {
    const offlineStatus = document.querySelector(".offline");
    document.body.innerHTML = "";
    document.body.innerHTML = `   
    <div class="offline">
      <div style="display="block">
      <div class="dd">
      <img
      style="display: block; width: 200px; height: 200px;"
      src="https://i1.wp.com/c306.net/thewinterblog/wp-content/uploads/2014/07/no_wifi.png?ssl=1"
      alt=""
     />
     </div>
     <br />
     <div class="dd">
     <h5 style="display: block">Internet mavjud bo'lmasligi mumkin</h5>
     </div>
     </div>
  </div>`;
    offlineStatus.style.display = "flex";
  }
});
