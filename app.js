let language = "en";
const langBtn = document.getElementById("langBtn");
langBtn.addEventListener("click", () => {
  language = language === "en" ? "ur" : "en";
  document.documentElement.lang = language;
  document.querySelectorAll("[data-en][data-ur]").forEach(el => {
    el.textContent = el.dataset[language];
  });
  langBtn.textContent = language === "en" ? "اردو / English" : "English / اردو";
});
document.querySelectorAll(".open").forEach(button => {
  button.addEventListener("click", () => {
    const area = document.getElementById("classroom");
    area.hidden = false;
    document.getElementById("classTitle").textContent =
      button.dataset.child + "’s Classroom";
    area.scrollIntoView({behavior:"smooth",block:"center"});
  });
});
