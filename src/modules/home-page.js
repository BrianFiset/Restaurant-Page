const pageContent = document.getElementsByClassName('content')[0];

export default function homePage() {
    const container = document.createElement('div');
    container.id = "container";
    pageContent.appendChild(container);

    const background = document.createElement('div');
    background.classList = "home-background";
    container.appendChild(background);

    const leftSide = document.createElement('div');
    leftSide.classList = "home-left";
    background.appendChild(leftSide);

    const rightSide = document.createElement('div');
    rightSide.classList = "home-right";
    background.appendChild(rightSide);

    const title = document.createElement('div');
    title.textContent = "Cookie Monster";
    title.classList = "home-title";
    rightSide.appendChild(title);

    const info = document.createElement('div');
    info.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis nisi consectetur, interdum elit eu, sollicitudin mi. Aenean varius vestibulum mi. Proin pharetra neque vestibulum, dapibus arcu at, faucibus arcu. Donec turpis turpis, commodo sit amet felis sit amet, sodales posuere nulla. Fusce a sem et risus tristique fermentum. Nullam scelerisque odio nibh, eget finibus mauris euismod sit amet. Pellentesque et pulvinar ex. "
    info.classList = "home-text";
    rightSide.appendChild(info);

    const btnContainer = document.createElement('div');
    btnContainer.classList = "order-container";
    rightSide.appendChild(btnContainer);

    const btn = document.createElement('div');
    btn.textContent = "Order Now";
    btn.classList = "order-btn";
    btnContainer.appendChild(btn);

};

