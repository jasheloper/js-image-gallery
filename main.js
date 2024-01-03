const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgFileNames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
const imgAltNames = ["Valley of the Sun", "Mountain Walk", "Desert Flowers", "Mountains and Desert", "Sunrise"];

/* Declaring the alternative text for each image file */

/* Looping through images */

for (let i = 0; i < imgFileNames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imgFileNames[i]}`);
    newImage.setAttribute('alt', imgAltNames[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", (event) => {
        const imgSrc = event.target.getAttribute('src');
        const imgAlt =  event.target.getAttribute('alt');
        displayedImage.setAttribute('src', `${imgSrc}`);
        displayedImage.setAttribute('alt', `${imgAlt}`);
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", (event) => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === "dark") {
        btn.setAttribute('class', 'light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else if (btnClass === "light") {
        btn.setAttribute('class', 'dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
});