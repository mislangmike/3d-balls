function showMessage() {
    alert("Hello! I love you^^");
}

// Initialize Three.js scene
function initThreeJS() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    
    // Set the size of the renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-container').appendChild(renderer.domElement); // Add the renderer to the DOM

    // Load the background image
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('galaxy.png', function(texture) {
        scene.background = texture; // Set the loaded texture as the scene background
    });

    // Set camera position
    camera.position.z = 5;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera); // Render the scene
    }
    animate();
}

// Call the function to initialize Three.js
initThreeJS();