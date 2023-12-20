let listA = document.querySelectorAll("a");
let active = "intro";
let zIndex = 2;

listA.forEach((a) => {
  a.addEventListener("click", function (event) {
    let valueTab = a.dataset.tab;
    let tabActive = document.getElementById(valueTab);
    let activeOld = document.querySelector(".tab.active");

    if (tabActive && valueTab !== active) {
      zIndex++;
      tabActive.style.zIndex = zIndex;
      active = valueTab;

      if (activeOld) {
        activeOld.classList.remove("active");
      }

      tabActive.classList.add("active");
      tabActive.style.setProperty("--x", event.clientX + "px");
      tabActive.style.setProperty("--y", event.clientY + "px");
    }
  });
});

// listA.forEach((a) => {
//   a.addEventListener("click", function (event) {
//     console.log("Clicked:", a); // Periksa apakah event click sudah terjadi pada elemen 'a'

//     let valueTab = a.dataset.tab;
//     console.log("valueTab:", valueTab); // Periksa nilai valueTab

//     let activeOld = document.querySelector(".tab.active");
//     console.log("activeOld:", activeOld); // Periksa apakah elemen dengan kelas '.tab.active' sudah ditemukan

//     // ... (bagian kode lainnya)
//   });
// });

// listA.forEach((a) => {
//   a.addEventListener("click", function (event) {
//     let valueTab = a.dataset.tab;
//     let activeOld = document.querySelector(".tab.active") || document.querySelector(".tab");

//     if (activeOld) {
//       activeOld.classList.remove("active");
//     }

//     if (valueTab && valueTab !== active) {
//       let tabActive = document.getElementById(valueTab);
//       if (tabActive) {
//         zIndex++;
//         tabActive.style.zIndex = zIndex;
//         active = valueTab;
//         tabActive.classList.setProperty("--x", event.clientX + "px");
//         tabActive.classList.setProperty("--y", event.clientY + "px");
//         tabActive.classList.add("active");
//       }
//     }
//   });
// });
