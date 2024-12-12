function Monster(name, image, description) {
    this.name = name;
    this.image = image;
    this.description = description;
}


// Monster objects with extended descriptions
let monsterOne = new Monster('Mojo', 'images/Mojo.jpg', 'The mighty Mojo fights for justice. With an unparalleled strength, he takes on evil forces with his fierce determination and cunning strategies, often saving the innocent from perilous situations.');
let monsterTwo = new Monster('Blackhole', 'images/Blackhole.jpg', 'A vortex of unparalleled power. Blackhole can consume anything in its path, from entire planets to entire galaxies. Its gravitational pull is so strong, even light cannot escape it, rendering everything in darkness.');
let monsterThree = new Monster('Bluedevil', 'images/Bluedevil.jpg', 'Cunning and deceptive, but fierce. Bluedevil uses its sharp intellect to outsmart opponents, hiding in the shadows. It uses its fiery breath to strike fear into the hearts of those who oppose it.');
let monsterFour = new Monster('Volcano', 'images/Volcano.jpg', 'A fiery beast of molten fury. Volcano can erupt with an unstoppable force, sending rivers of lava flowing across the land. It controls the earth’s molten core, shaping mountains and craters in its wake.');
// List of all monsters
let monsters = [monsterOne, monsterTwo, monsterThree, monsterFour];

// Select DOM elements
let monsterName = document.querySelector('.monster-name');
let monsterDescription = document.querySelector('.monster-description');
let container = document.querySelector('.container');

// Function to update the UI
function Beasts(selectedImageSrc) {
    // Extract the image filename from the src
    const selectedImageName = selectedImageSrc.split('/').pop();

    // Find the matching monster based on the image filename
    let selectedMonster = monsters.find(monster => monster.image.includes(selectedImageName));

    if (selectedMonster) {
        // Change container background image
        container.style.backgroundImage = `url(${selectedMonster.image})`;
        
   container.classList.remove('animateBackground'); // Remove animation class
   void container.offsetWidth; // Trigger reflow to restart the animation
   container.classList.add('animateBackground'); // Add the animation class

        // Update monster name and description
        monsterName.textContent = selectedMonster.name;
        monsterDescription.textContent = selectedMonster.description;
    }
}

// Attach event listeners to images
document.querySelectorAll('.imageList img').forEach(img => {
    img.addEventListener('click', function () {
        Beasts(img.src); // Pass the image source to Beasts function
    });
});

// 

// let container = document.querySelector('.container');
//let title = document.querySelector('h2');

//function Beasts(Beast) {
   // container.style.backgroundImage = `url(${Beast})`;

   // container.classList.remove('animateBackground'); // Remove animation class
   // void container.offsetWidth; // Trigger reflow to restart the animation
   // container.classList.add('animateBackground'); // Add the animation class
    
    // Extract the filename from the image source
    // let imageName = Beast.split('/').pop().split('.')[0];
    
    // Update the title with the image name
    // title.innerHTML = imageName;
// }
