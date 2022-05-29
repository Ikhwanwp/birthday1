// Custom
var pengirim = "Mas 1 💖";
var musik = "suarakayu.mp3";
var ucapan =
  "Semoga apa yang sudah kamu harapkan tadi dapat terwujud ya. Jangan mudah menyerah ya sayang, jangan terlalu sering overthingking juga. Percuma kamu memikirkan omongan orang lain, padahal mereka belum tentu memikirkan apa yang mereka bilang ke kamu. Oiya, Aku ada sesuatu lagi nih, mau liat gak? ";
// var background1 = "a1.jpg";
var background1 = "bg-1.jpg";
var background2 = "coba.gif";
// var background2 = "a2.jpg";
var noWhatsapp = "6282246101540";
var pesanWhatsapp = "Haiii";

// ======================================
var audio = document.querySelector(".audio");
if (musik) audio.src = musik;
var notif = document.querySelector(".notif");
if (pengirim) {
  document.querySelector(".nama1").innerHTML = pengirim;
  document.querySelector(".nama2").innerHTML = pengirim;
}
if (background1) {
  document.querySelector(".background2").style.backgroundImage =
    "url('" + background1 + "')";
}
if (background2) {
  document.querySelector(".background1").style.backgroundImage =
    "url('" + background2 + "')";
}
$(window).on("load", function () {
  $(".loading").fadeOut("slow");
});
function tanggal() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let hari = days[d.getDay()];
  let tgl = d.getDate();
  let bln = months[d.getMonth()];
  document.querySelector(".tgl").innerHTML = hari + ", " + tgl + " " + bln;
}
function notif1() {
  document.querySelector(".hilang1").style.display = "none";
  document.querySelector(".hilang2").style.display = "inline-block";
  audio.play();
  notif.play();
  document.querySelector(".notif1").style.transform = "translateX(0)";
}
const swalo = Swal.mixin({
  confirmButtonColor: "#23a542",
  allowOutsideClick: false,
  showCancelButton: false,
  customClass: { popup: "border-radius" },
});
async function balas() {
  var { value: nama } = await swalo.fire({
    imageUrl: "https://media.giphy.com/media/1zKRm7xZjkhaeeZbSd/giphy.gif",
    imageHeight: 120,
    title: "Selamat ulang tahun ya sayang 💖, make a wish dulu",
    input: "text",
    confirmButtonText: "Done",
  });
  if (nama) {
    document.querySelector(".hilang2").style.display = "none";
    txt = "Hai by, ";
    if (ucapan) {
      txt += ucapan;
    } else {
      txt +=
        "Namamu dimulai dari huruf " +
        nama.charAt(0) +
        ". Abjad dimulai dari A B C. Angka dimulai dari 1 2 3. Tangga nada dimulai dari do re mi. Cinta dimulai dengan aku dan kamuÃ°Å¸â€™â€“";
    }
    typeWriter();
    notif2();
  } else {
    await swalo.fire({
      imageUrl: "https://i.postimg.cc/Z57zncGC/cutie2.gif",
      imageHeight: 120,
      confirmButtonText: "Iya deh",
      title: "Kenapa gak diisi? Harus diisi ya sayang...",
    });
    balas();
  }
}
function notif2() {
  notif.play();
  document.querySelector(".notif1").style.display = "none";
  document.querySelector(".notif2").style.transform = "translateX(0)";
}
var i = 0;
var speed = 120;
function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".gombal").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.querySelector(".notif2").style.animation =
      "kelip 1200ms infinite ease";
    document.querySelector(".background2").style.transition = "3s all ease";
    document.querySelector(".background2").style.opacity = "0";
    if (noWhatsapp && pesanWhatsapp) {
      document.querySelector(".kirimWA").style.display = "inline-block";
    }
  }
}
function startTime() {
  tanggal();
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  h = checkTime(h);
  m = checkTime(m);
  document.getElementById("jam").innerHTML = h + ":" + m;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
document.querySelector(".kirimWA").addEventListener("click", function () {
  location.assign("https://birthday-mylove2.netlify.app");
});
