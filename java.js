document.getElementById("enter-btn").addEventListener("click", () => {
  const splash = document.getElementById("splash-screen");
  splash.style.opacity = "0";
  setTimeout(() => {
    splash.style.display = "none";
    document.querySelector(".side-images").style.display = "block";
    const audio = document.getElementById("bosliman-audio");
    if (audio) {
      audio.play().catch((e) => {
        console.log("Ses oynatılamadı:", e);
      });
    }
  }, 1000);
});