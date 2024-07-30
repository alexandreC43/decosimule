document.getElementById("artens-casablanca").addEventListener("click", function() {
    changerImage('artens-casablanca', 'sol');
});

document.getElementById("aubade-abetone").addEventListener("click", function() {
    changerImage('aubade-abetone', 'sol');
});

document.getElementById("artens-branch").addEventListener("click", function() {
    changerImage('artens-branch', 'sol');
});

document.getElementById("luxens-bali1").addEventListener("click", function() {
    changerImage('luxens-bali1', 'peinture');
});

document.getElementById("luxens-forest3").addEventListener("click", function() {
    changerImage('luxens-forest3', 'peinture');
});

document.getElementById("luxens-laguna2").addEventListener("click", function() {
    changerImage('luxens-laguna2', 'peinture');
});

document.getElementById("luxens-sage3").addEventListener("click", function() {
    changerImage('luxens-sage3', 'peinture');
});

function changerImage(vue, type) {
    const cheminImage = `images/${vue}.png`;
    console.log(cheminImage);

    if (type === 'sol') {
        document.getElementById("sol-overlay").src = cheminImage;
    } else if (type === 'peinture') {
        document.getElementById("peinture-overlay").src = cheminImage;
    }
}
