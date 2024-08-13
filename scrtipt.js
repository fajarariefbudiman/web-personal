function loadHTML(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => (document.getElementById(id).innerHTML = data))
    .catch((error) => console.log(error));
}

loadHTML("navbar", "navbar.html");
loadHTML("footer", "footer.html");

document.addEventListener('DOMContentLoaded',function () {
   const currentLocation = window.location.pathname;
   const menuItems = document.querySelectorAll('.nav-link');

   menuItems.forEach(item=>{
    const href = item.getAttribute('href');
    if (currentLocation.includes(href)) {
        item.classList.add('active');
    }
   });
});