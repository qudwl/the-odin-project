import BagelImage from "./img/bagel.png";

const home = () => {
    // Create elements of the page.
    let div = document.createElement("div");
    let title = document.createElement("h1");
    let image = document.createElement("img");
    let copy = document.createElement("p");

    title.innerText = "Bagels!";
    image.src = BagelImage;
    copy.innerText = "Bagels! serve the freshest and flavorful bagels! Come try them today.";

    div.appendChild(title);
    div.appendChild(image);
    div.appendChild(copy);

    return div;
}

export default home;