import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// scene
const scene = new THREE.Scene();

// geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const cube = new THREE.Mesh(geometry, material);
cube.position.set(1, 0, 0);
scene.add(cube);

// wireframe
const wgeometry = new THREE.BoxGeometry(1, 1, 1);
const wmaterial = new THREE.MeshBasicMaterial({color: 0xffff00, wireframe: true});
const wcube = new THREE.Mesh(wgeometry, wmaterial);
wcube.position.set(-1, 0, 0);
scene.add(wcube);

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// orbitcontrols
const controls = new OrbitControls(camera, renderer.domElement);

// handle window resize
window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});

// instruction ui
const instructionsElement = document.createElement('div');
instructionsElement.innerHTML = '<div style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);color: #555; padding: 10px 20px;font-family: Arial; z-index: 100;user-select: none; pointer-events: none;"><b>Controls:</b> Left-click + drag to rotate | Right-click + drag to pan | Mouse wheel to zoom</div>';
document.body.appendChild(instructionsElement);

// animate loop
function animate() {
	const speed = 0.007;
	cube.rotation.x += speed;
	cube.rotation.y += speed;
	wcube.rotation.x += speed;
	wcube.rotation.y += speed;

	renderer.render(scene, camera);

}