import home from "./home";
import contact from "./contact";
import menu from "./menu";
import "./style.css";

const page = document.getElementById("content");

let tabGroup = document.createElement('div');
let homeTab = document.createElement('button');
let menuTab = document.createElement('button');
let contactTab = document.createElement('button');

// Add event listeners to remove and add tabs.
homeTab.addEventListener('click', () => {
    page.removeChild(page.lastChild);
    page.appendChild(home());
    setCurTab("home");
});
menuTab.addEventListener('click', () => {
    page.removeChild(page.lastChild);
    page.appendChild(menu());
    setCurTab("menu");
});
contactTab.addEventListener('click', () => {
    page.removeChild(page.lastChild);
    page.appendChild(contact());
    setCurTab("contact");
});

const setCurTab = (tab) => {
    homeTab.classList = "";
    menuTab.classList = "";
    contactTab.classList = "";

    switch (tab) {
        case "home":
            homeTab.classList = "active";
            break;
        case "menu":
            menuTab.classList = "active";
            break;
        case "contact":
            contactTab.classList = "active";
            break;
        default:
            console.error("Should not be able to come here.", 1);
            break;
    }
}

// Set button text
homeTab.textContent = "Home";
menuTab.textContent = "Menu";
contactTab.textContent = "Contact";

tabGroup.appendChild(homeTab);
tabGroup.appendChild(menuTab);
tabGroup.appendChild(contactTab);

tabGroup.classList = "tabGroup";

page.appendChild(tabGroup);
page.appendChild(home());

setCurTab("home");