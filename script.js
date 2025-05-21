// عبارات ترحيبية متغيّرة
const welcomeMessages = [
  "أهلًا وسهلًا! نوّرت المتجر ✨",
  "مرحبًا بك! نتمنى لك تجربة ممتعة 💛",
  "وش ناوي/ة تشتري اليوم؟ 👀",
  "جاهزين نخدمك بكل حب ❤️",
  "رجعت لنا؟ مبسوطين بوجودك 😍"
];

window.onload = function () {
  const splash = document.getElementById("logoSplash");
  const welcome = document.getElementById("welcomePopup");
  const message = document.getElementById("welcomeMessage");

  // امنع التمرير
  document.body.style.overflow = 'hidden';

  // تلاشي بعد 3 ثواني
  setTimeout(() => {
    splash.classList.add("fade-out");

    // بعد انتهاء التلاشي، نخفيها ونظهر نافذة الترحيب
    setTimeout(() => {
      splash.style.display = "none";

      const randomMsg = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
      message.textContent = randomMsg;
      welcome.style.display = "flex";

    }, 1000); // وقت التلاشي (1 ثانية)
  }, 3000); // وقت الانتظار (3 ثواني)
};

// زر الإغلاق
function closeWelcome() {
  document.getElementById("welcomePopup").style.display = "none";
  document.body.style.overflow = 'auto';
}
