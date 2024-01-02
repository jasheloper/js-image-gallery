const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgFileNames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

console.log(`The length of the imgFileNames array is: ${imgFileNames.length}`);

/* Declaring the alternative text for each image file */

/* Looping through images */

for (let i = 0; i < imgFileNames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imgFileNames[i]}`);
    newImage.setAttribute('alt', imgFileNames[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", (event) => {
        const imgSrc = event.target.getAttribute('src');
        const imgAlt =  event.target.getAttribute('alt');
        displayedImage.setAttribute('src', `${imgSrc}`);
        displayedImage.setAttribute('alt', `${imgAlt}`);
        console.log(
            `
                The image SRC is: ${imgSrc}
                The imag ALT is: ${imgAlt}
            `
        );
    });
}


/* Wiring up the Darken/Lighten button */
