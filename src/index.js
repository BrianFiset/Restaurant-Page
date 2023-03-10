import loadPage from "./modules/page-load";
import homePage from "./modules/home-page";
import menuPage from "./modules/menu-page";
import loadContactUs from "./modules/contact-us"

loadPage()
homePage()


document.getElementById("home-page").addEventListener('click', function() {  
    const container = document.getElementById('container');
    container.innerHTML = '';
    container.remove()
    homePage();
  });


document.getElementById("menu-page").addEventListener('click', function() {
    const container = document.getElementById('container');
    container.innerHTML = '';
    container.remove()
    menuPage();
  });

document.getElementById("contact-page").addEventListener('click', function() {
    const container = document.getElementById('container');
    container.innerHTML = '';
    container.remove()
    loadContactUs();
  });