"use strict";
<!--    install npm install bootstrap@5.3.2-->
const activateFirstTab = () => {
    const triggerEl = document.querySelector('#myTab button[data-bs-target="#size"]');
    bootstrap.Tab.getOrCreateInstance(triggerEl).show() // Select tab by name
}

const activateSecondTab = () => {
    const triggerEl = document.querySelector('#myTab button[data-bs-target="#cheese-sauce"]');
    bootstrap.Tab.getOrCreateInstance(triggerEl).show() // Select tab by name
}

const activateThirdTab = () => {
    const triggerEl = document.querySelector('#myTab button[data-bs-target="#toppings"]');
    bootstrap.Tab.getOrCreateInstance(triggerEl).show() // Select tab by name
}
