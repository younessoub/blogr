// mobile menu button
const menuOpen = document.querySelector(".menuOpen");
const menuClose = document.querySelector(".menuClose");

menuOpen.addEventListener("click", function () {
  menuOpen.classList.toggle('active');
  menuClose.classList.toggle('active');
})

menuClose.addEventListener("click", function () {
  menuOpen.classList.toggle('active');
  menuClose.classList.toggle('active');
})


//dropdowntoggle

const dropdownToggle = document.querySelectorAll(".dropdownToggle");

dropdownToggle.forEach((e) => {

  e.addEventListener('click', (el) => {
    dropdownToggle.forEach((d) => {
      if (d !== el.currentTarget) {
        d.classList.remove('active')
      }
    })
    if (el.currentTarget.classList.contains('active')) {
      el.currentTarget.classList.remove('active');
    }
    else {
      el.currentTarget.classList.add('active');
    }
  })

})
