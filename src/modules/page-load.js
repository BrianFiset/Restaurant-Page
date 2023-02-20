const pageContent = document.getElementsByClassName('content')[0];

function header() {
    const header = document.createElement('div');
    header.className = "header";
    pageContent.appendChild(header);

    const resName = document.createElement('div');
    resName.className = "res-name";
    resName.textContent = "Cookie Monster";
    header.appendChild(resName);

    const nav = document.createElement('div');
    nav.className = "nav";
    header.appendChild(nav);

    const homePage = document.createElement('div');
    homePage.id = "home-page";
    homePage.textContent = "Home";
    nav.appendChild(homePage);

    const menuPage = document.createElement('div');
    menuPage.id = "menu-page";
    menuPage.textContent = "Menu";
    nav.appendChild(menuPage);

    const contactPage = document.createElement('div');
    contactPage.id = "contact-page";
    contactPage.textContent = "Contact Us";
    nav.appendChild(contactPage);

};

export default function loadPage() {
    header();
};