const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ["../img/pic1.jpeg",
                "../img/pic2.JPG",
                "../img/pic3.JPG",
                "../img/pic4.JPG",
                "../img/pic5.JPG",]

const altText = {
    "image1": "Selfie of me in Munich city center",
    "image2": "Photo of Pena Palace in Sintra, Portugal",
    "image3": "Photo of me and my boyfriend infront of the chruch on the Prague castle grounds",
    "image4": "Selfie of me and my counsins in Rome",
    "image5": "Photo of Old Town Square in Prague"
}

//for (let i = 0; i< images.length; i++) ()
for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText['image'+(i+1)]);
    thumbBar.appendChild(newImage);
function displayImage() {
    displayedImage.setAttribute('src', images[i]);
    displayedImage.setAttribute('alt', altText['image'+(i+1)]);
}
    newImage.addEventListener("click", displayImage);
}

btn.addEventListener("click", ()=> {
    if (btn.getAttribute("class") == "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        return
    }
    if (btn.getAttribute("class") == "light") {
        btn.setAttribute("class", "dark");
        btn.textContent = "darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
        return
    }
})
