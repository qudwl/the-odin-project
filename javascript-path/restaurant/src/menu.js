const menu = () => {
    // Create elements of the tab.
    let div = document.createElement('div');
    let title = document.createElement('h2');

    title.innerText = 'Menu';
    div.appendChild(title);

    return div;
}

export default menu;