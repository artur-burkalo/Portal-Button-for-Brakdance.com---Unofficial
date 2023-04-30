// Find the existing button on the page
const existingBDSection = document.querySelector('header .bde-div-23937-124');
let buttonNameLoggInBD = 'My Account';


existingBDSection.style.flexDirection = 'row';
existingBDSection.style.gap = '10px';

// Create a new button element
let newButtonBD = document.createElement('div');
newButtonBD.setAttribute('class', 'bde-button-23937-125 bde-button');

const buttonBDNewInner = `
    <a class="breakdance-link button-atom button-atom--custom bde-button__button" href="/portal" target="_self" data-type="url">
        <span class="button-atom__text">${buttonNameLoggInBD}</span>
    </a>
    `

    ;
newButtonBD.innerHTML = buttonBDNewInner;

// Insert the new button after the existing button
existingBDSection.append(newButtonBD);