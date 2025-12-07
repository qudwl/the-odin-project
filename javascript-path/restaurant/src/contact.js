const contact = () => {
    // Create elements of the tab.
    let div = document.createElement('div');
    let title = document.createElement('h2');

    title.innerText = 'Contact Us';
    div.appendChild(title);

    return div;
}

export default contact;