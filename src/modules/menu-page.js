const pageContent = document.getElementsByClassName('content')[0];

function changeTitle(selector,text, amount) {
    const title = selector.querySelector('.title')
    const price = selector.querySelector('.price')
    title.innerText = `${text}`
    price.innerText = 'Price: $' + amount
}


export default function menuPage() {
    const container = document.createElement('div');
    container.id = 'container';
    pageContent.appendChild(container);

    const menuItems = document.createElement('div');
    menuItems.className = 'menu-items';
    container.appendChild(menuItems)

    for (let i = 0; i < 8; i+= 1) {
        const item = document.createElement('div');
        item.className = `item${i} item`;

        const title = document.createElement('div');
        title.className = 'title'

        const image = document.createElement('div');
        image.className = 'image'

        const price = document.createElement('div');
        price.className = 'price'

        const itemName = 'item' + i;;
        window[itemName] = item;
    
        menuItems.appendChild(item);
        item.appendChild(title);
        item.appendChild(image);
        item.appendChild(price);

    };

    changeTitle(item0,'Chocolate Cookie with Peanuts', 4.99);
    changeTitle(item1,'Sandwich Cookie', 6.99);
    changeTitle(item2, 'Gingerbread Cookies', 3.99)
    changeTitle(item3, 'Chocolate Chip Cookies', 3.99)
    changeTitle(item4, 'Vanilla Shortbreads Cookies', 4.99)
    changeTitle(item5, 'Fudge Cookies', 4.99)
    changeTitle(item6, 'Oat Cookies', 4.99)
    changeTitle(item7, 'Peanut Butter Cookies', 4.99)
};