const terre_cote = document.querySelector(".a-cote-terre");
const reservoir_elt = document.querySelectorAll(".reservoir");

const main_tuyau_1 = document.querySelector(".main-tuyau-1");
const main_tuyau_2 = document.querySelector(".main-tuyau-2");

const tuyau_secondaire = document.querySelectorAll(".tuyau-secondaire");

const terre_dispositif = document.querySelector(".terre-dispositif");
const dispositif = document.querySelector(".dispositif");
const sensors_humidity = document.querySelectorAll(".sensor-humidity");

function display_terre_a_cote() {
  terre_cote.classList.add("a-cote-terre-animation");
}

function display_reservoir() {
  reservoir_elt.forEach((elt) => {
    elt.classList.add("animation-reservoir-active");
  });
}

function display_main_tuyau_1() {
  main_tuyau_1.classList.add("animation-tuyau-1-active");
}

function display_main_tuyau_2() {
  main_tuyau_2.classList.add("animation-tuyau-2-active");
}

function display_tuyau_secondaire() {
  tuyau_secondaire.forEach((elt) => {
    elt.classList.add("tuyau-secondaire-animation-active");
  });
}

function display_all_ouverture() {
  // premier lot 1er cote
  document
    .querySelector(".fleche-1-1")
    .classList.add("animation-fleche-1-x_1_3-active");
  document
    .querySelector(".fleche-1-2")
    .classList.add("animation-fleche-1-x_1_3-active");
  document
    .querySelector(".fleche-1-3")
    .classList.add("animation-fleche-1-x_1_3-active");

  // 2e cote
  document
    .querySelector(".fleche-1-4")
    .classList.add("animation-fleche-1-x_4_6-active");
  document
    .querySelector(".fleche-1-5")
    .classList.add("animation-fleche-1-x_4_6-active");
  document
    .querySelector(".fleche-1-6")
    .classList.add("animation-fleche-1-x_4_6-active");

  // deuxieme lot 1er cote
  document
    .querySelector(".fleche-2-1")
    .classList.add("animation-fleche-2-x_1_3-active");
  document
    .querySelector(".fleche-2-2")
    .classList.add("animation-fleche-2-x_1_3-active");
  document
    .querySelector(".fleche-2-3")
    .classList.add("animation-fleche-2-x_1_3-active");

  // 2e cote
  document
    .querySelector(".fleche-2-4")
    .classList.add("animation-fleche-2-x_4_6-active");
  document
    .querySelector(".fleche-2-5")
    .classList.add("animation-fleche-2-x_4_6-active");
  document
    .querySelector(".fleche-2-6")
    .classList.add("animation-fleche-2-x_4_6-active");

  // 3 lot 1er cote
  document
    .querySelector(".fleche-3-1")
    .classList.add("animation-fleche-3-x_1_3-active");
  document
    .querySelector(".fleche-3-2")
    .classList.add("animation-fleche-3-x_1_3-active");
  document
    .querySelector(".fleche-3-3")
    .classList.add("animation-fleche-3-x_1_3-active");

  // 2e cote
  document
    .querySelector(".fleche-3-4")
    .classList.add("animation-fleche-3-x_4_6-active");
  document
    .querySelector(".fleche-3-5")
    .classList.add("animation-fleche-3-x_4_6-active");
  document
    .querySelector(".fleche-3-6")
    .classList.add("animation-fleche-3-x_4_6-active");
}

function display_terre_dispositif() {
  terre_dispositif.classList.add("terre-dispositif-animation-active");
}

function display_dispositif() {
  dispositif.classList.add("dispositif-animation-active");
}

function display_sensor_humidity() {
  sensors_humidity.forEach((elt) => {
    elt.classList.add("sensor-humidity-animation-active");
  });
}

function display_signal_wifi() {
  document.querySelector(".wifi-1").classList.add("wifi-animation-active");
  document.querySelector(".wifi-2").classList.add("wifi-animation-active");
  document.querySelector(".wifi-3").classList.add("wifi-animation-active");
  document.querySelector(".wifi-4").classList.add("wifi-animation-active");
  document.querySelector(".wifi-5").classList.add("wifi-animation-active");
}

function display_camera_1() {
  document.querySelector(".camera-0").classList.add("animation-camera-active");
}

function display_all_camera() {
  document.querySelectorAll(".cameras").forEach((elt) => {
    elt.classList.add("animation-camera-x-active");
  });
}

function display_farmer() {
  document.querySelector(".farmer").style.display = "block";
  document.querySelector(".phone").style.display = "block";
  document.querySelector(".wifi-6").style.display = "block";
  document.querySelector(".wifi-6").classList.add("wifi-animation-active");
}

function start_arrosage() {
  document
    .querySelector(".fleche-n-1-1")
    .classList.add("arrosage-animation-active");

  document
    .querySelector(".fleche-n-2-1")
    .classList.add("arrosage-animation-active");
  document
    .querySelector(".fleche-n-2-2")
    .classList.add("arrosage-animation-active");
  document
    .querySelector(".fleche-n-2-3")
    .classList.add("arrosage-animation-active");
  document
    .querySelector(".fleche-n-2-4")
    .classList.add("arrosage-animation-active");
  document
    .querySelector(".fleche-n-2-5")
    .classList.add("arrosage-animation-active");
  document
    .querySelector(".fleche-n-2-6")
    .classList.add("arrosage-animation-active");
  document
    .querySelector(".fleche-n-2-7")
    .classList.add("arrosage-animation-active");
  document
    .querySelector(".fleche-n-2-8")
    .classList.add("arrosage-animation-active");
  document
    .querySelector(".fleche-n-2-9")
    .classList.add("arrosage-animation-active");
  document
    .querySelector(".fleche-n-2-10")
    .classList.add("arrosage-animation-active");

  document
    .querySelector(".fleche-n-3-1")
    .classList.add("arrosage-animation-active");
  document
    .querySelector(".fleche-n-3-2")
    .classList.add("arrosage-animation-active");
  document
    .querySelector(".fleche-n-3-3")
    .classList.add("arrosage-animation-active");
  document
    .querySelector(".fleche-n-3-4")
    .classList.add("arrosage-animation-active");

  document
    .querySelector(".fleche-n-4-1")
    .classList.add("arrosage-animation-active");
  document
    .querySelector(".fleche-n-4-2")
    .classList.add("arrosage-animation-active");
  document
    .querySelector(".fleche-n-4-3")
    .classList.add("arrosage-animation-active");
  document
    .querySelector(".fleche-n-4-4")
    .classList.add("arrosage-animation-active");

  document
    .querySelector(".fleche-n-5-1")
    .classList.add("arrosage-animation-active");
  document
    .querySelector(".fleche-n-5-2")
    .classList.add("arrosage-animation-active");
  document
    .querySelector(".fleche-n-5-3")
    .classList.add("arrosage-animation-active");
  document
    .querySelector(".fleche-n-5-4")
    .classList.add("arrosage-animation-active");
}
