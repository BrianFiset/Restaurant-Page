const pageContent = document.getElementsByClassName('content')[0];

export default function loadContactUs() {
    const container = document.createElement('div');
    container.id = "container";
    pageContent.appendChild(container);

    const extra = document.createElement('div');
    extra.className = "extra";
    container.appendChild(extra);

    const container1 = document.createElement('div');
    container1.className = "container1";
    extra.appendChild(container1);


    const phoneNumber = document.createElement('div');
    phoneNumber.textContent = 'Phone Number'
    phoneNumber.className = "phone-number";
    container1.appendChild(phoneNumber);

    const phoneNumber1 = document.createElement('div');
    phoneNumber1.textContent = '252-432-423'
    phoneNumber1.className = "phone-number1";
    container1.appendChild(phoneNumber1);

    const direction = document.createElement('div');
    direction.textContent = 'Location'
    direction.className = "directions";
    container1.appendChild(direction);

    const direction1 = document.createElement('div');
    direction1.textContent = '???'
    direction1.iclassNamed = "directions1";
    container1.appendChild(direction1);
}