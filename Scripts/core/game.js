/// <reference path="_reference.ts"/>
// MAIN GAME FILE
//Last Modified by      Vishal Guleria
//Date last Modified    March 2,2016
//Program description   COMP392 - MidTerm  The Tapered Tower
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var Point = objects.Point;
var CScreen = config.Screen;
//Custom Game Objects
var gameObject = objects.gameObject;
// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (function () {
    // declare game objects
    var scene = new Scene();
    var renderer;
    var camera;
    var control;
    var gui;
    var stats;
    var axes;
    var plane;
    var plane2;
    var ambientLight;
    var spotLight;
    var cubeGeometry1;
    var cubeGeometry2;
    var cubeGeometry3;
    var cubeGeometry4;
    var cubeGeometry5;
    var cubeGeometry6;
    var cube1;
    var cube2;
    var cube3;
    var cube4;
    var cube5;
    var cube6;
    var cube;
    var cubeGeometry;
    function init() {
        // Instantiate a new Scene object
        //scene = new Scene();
        setupRenderer(); // setup the default renderer
        setupCamera(); // setup the camera
        // add an axis helper to the scene
        axes = new AxisHelper(100);
        scene.add(axes);
        console.log("Added Axis Helper to scene...");
        //Adding Textures
        var textureTower = THREE.ImageUtils.loadTexture('Scripts/core/Texturers/Tower.jpg');
        var materialTower = new THREE.MeshPhongMaterial({
            map: textureTower,
            bumpMap: textureTower,
            bumpScale: 0.05,
        });
        var textureFloor = THREE.ImageUtils.loadTexture('Scripts/core/Texturers/Ground.jpg');
        var materialFloor = new THREE.MeshPhongMaterial({
            map: textureFloor,
            bumpMap: textureFloor,
            bumpScale: 0.05,
        });
        var textureSky = THREE.ImageUtils.loadTexture('Scripts/core/Texturers/Sky.jpg');
        var materialSky = new THREE.MeshPhongMaterial({
            map: textureSky,
            bumpMap: textureSky,
            bumpScale: 0.05,
        });
        // Add an AmbientLight to the scene
        ambientLight = new AmbientLight(0x222222);
        scene.add(ambientLight);
        console.log("Added an Ambient Light to Scene");
        // Add a SpotLight to the scene
        spotLight = new SpotLight(0xffffff);
        spotLight.position.set(40, 60, 40);
        spotLight.lookAt(new Vector3(0, 13, 0));
        spotLight.castShadow = true;
        scene.add(spotLight);
        console.log("Added a SpotLight Light to Scene");
        //Add a Plane to the Scene
        plane = new gameObject(new PlaneGeometry(100, 100, 1, 1), materialFloor, 0, 0, 0);
        plane.rotation.x = -0.5 * Math.PI;
        scene.add(plane);
        console.log("Added Plane Primitive to scene...");
        //Add a Sky Plane to the Scene
        plane2 = new gameObject(new PlaneGeometry(250, 250, 1, 1), materialSky, 0, 0, -100);
        plane2.rotation.z = -0.5 * Math.PI;
        scene.add(plane2);
        console.log("Added Plane Primitive to scene...");
        //Add Cubes for the tower
        cubeGeometry1 = new CubeGeometry(6, 3, 6);
        cube1 = new Mesh(cubeGeometry1, materialTower);
        cube1.castShadow = true;
        cube1.position.x = 0;
        cube1.position.y = 1.5;
        cube1.position.z = 0;
        scene.add(cube1);
        cubeGeometry2 = new CubeGeometry(5, 4, 5);
        cube2 = new Mesh(cubeGeometry2, materialTower);
        cube2.castShadow = true;
        cube2.position.x = 0;
        cube2.position.y = 5;
        cube2.position.z = 0;
        scene.add(cube2);
        cubeGeometry3 = new CubeGeometry(4, 6, 4);
        cube3 = new Mesh(cubeGeometry3, materialTower);
        cube3.castShadow = true;
        cube3.position.x = 0;
        cube3.position.y = 10;
        cube3.position.z = 0;
        scene.add(cube3);
        cubeGeometry4 = new CubeGeometry(3, 6, 3);
        cube4 = new Mesh(cubeGeometry4, materialTower);
        cube4.castShadow = true;
        cube4.position.x = 0;
        cube4.position.y = 16;
        cube4.position.z = 0;
        scene.add(cube4);
        cubeGeometry5 = new CubeGeometry(2, 8, 2);
        cube5 = new Mesh(cubeGeometry5, materialTower);
        cube5.castShadow = true;
        cube5.position.x = 0;
        cube5.position.y = 23;
        cube5.position.z = 0;
        scene.add(cube5);
        // add controls
        gui = new GUI();
        control = new Control(0.00, 0.00, 0.00, 0.00, 0.00, false);
        addControl(control);
        // Add framerate stats
        addStatsObject();
        console.log("Added Stats to scene...");
        document.body.appendChild(renderer.domElement);
        gameLoop(); // render the scene	
    }
    function addControl(controlObject) {
        //Adding control
        gui.add(controlObject, 'rotationSpeed1', -0.5, 0.5);
        gui.add(controlObject, 'rotationSpeed2', -0.5, 0.5);
        gui.add(controlObject, 'rotationSpeed3', -0.5, 0.5);
        gui.add(controlObject, 'rotationSpeed4', -0.5, 0.5);
        gui.add(controlObject, 'rotationSpeed5', -0.5, 0.5);
        gui.add(controlObject, "toggle");
    }
    function addStatsObject() {
        stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }
    // Setup main game loop
    function gameLoop() {
        stats.update();
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
        cube1.rotation.y += control.rotationSpeed1;
        cube2.rotation.y += control.rotationSpeed2;
        cube3.rotation.y += control.rotationSpeed3;
        cube4.rotation.y += control.rotationSpeed4;
        cube5.rotation.y += control.rotationSpeed5;
        if (control.goDown) {
            cube1.position.y -= 0.01;
            cube2.position.y -= 0.01;
            cube3.position.y -= 0.01;
            cube4.position.y -= 0.01;
            cube5.position.y -= 0.01;
        }
        // render the scene
        renderer.render(scene, camera);
    }
    // Setup default renderer
    function setupRenderer() {
        renderer = new Renderer();
        renderer.setClearColor(0x111111, 1.0);
        renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        console.log("Finished setting up Renderer...");
    }
    // Setup main camera for the scene
    function setupCamera() {
        camera = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
        camera.position.x = 0;
        camera.position.y = 15;
        camera.position.z = 45;
        // camera.rotation.set(-1.10305, 0.49742, -0.1396);
        camera.lookAt(new Vector3(0, 13, 0));
        console.log("Finished setting up Camera...");
    }
    window.onload = init;
    return {
        scene: scene
    };
})();

//# sourceMappingURL=game.js.map
