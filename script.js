<script>
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

    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      splash.classList.add("fade-out");

      setTimeout(() => {
        splash.style.display = "none";

        const randomMsg = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
        message.textContent = randomMsg;
        welcome.style.display = "flex";

      }, 1000); // انتهاء التلاشي
    }, 3000); // مدة ظهور الشعار
  };

  function closeWelcome() {
    document.getElementById("welcomePopup").style.display = "none";
    document.body.style.overflow = 'auto';
  }
</script>
