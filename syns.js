// Låter bilder och text glida in mjukt när man skrollar. Utan skript syns allt direkt.
(function () {
  document.documentElement.classList.remove("ingen-js");
  var delar = document.querySelectorAll(".syns");
  if (!("IntersectionObserver" in window)) {
    delar.forEach(function (d) { d.classList.add("inne"); });
    return;
  }
  var vakt = new IntersectionObserver(function (poster) {
    poster.forEach(function (p) {
      if (p.isIntersecting) { p.target.classList.add("inne"); vakt.unobserve(p.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  delar.forEach(function (d) { vakt.observe(d); });
})();
