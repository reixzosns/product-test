function typeText(selector, text, delay = 50) {
  let el = document.querySelector(selector);
  el.textContent = ''; // Clear before typing
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, delay);
    }
  }
  type();
}

document.getElementById("getNowBtn").onclick = () => {
  // Fullscreen
  document.documentElement.requestFullscreen().catch(() => {});
  
  // Hide intro, show prank
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").style.display = "block";

  // Fetch IP & location info
  $.getJSON("https://ipapi.co/json/", function (data) {
    setTimeout(() => typeText("#ip_address", data.ip), 300);
    setTimeout(() => typeText("#country_name", data.country_name), 600);
    setTimeout(() => typeText("#region_name", data.region), 900);
    setTimeout(() => typeText("#city_name", data.city), 1200);
    setTimeout(() => typeText("#latitude", data.latitude.toString()), 1500);
    setTimeout(() => typeText("#longitude", data.longitude.toString()), 1800);
    setTimeout(() => typeText("#postal_code", data.postal), 2100);
    setTimeout(() => typeText("#timezone", data.timezone), 2400);
    setTimeout(() => typeText("#isp", data.org), 2700);

    // Reveal chatbot lines after typing
    setTimeout(() => {
      document.querySelectorAll(".bot").forEach((el, i) => {
        setTimeout(() => {
          el.style.display = "block";
        }, i * 1500);
      });
    }, 3200);
  });
};
