import * as THREE from "three";
import { useEffect } from "react";
import { gsap } from "gsap";

const Page1 = () => {
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Renderer setup
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    document.body.appendChild(renderer.domElement);

    // Create a cube
    const geometry = new THREE.BoxGeometry(2, 1, 3);
    const material = new THREE.MeshBasicMaterial({ color: 0xe0b127 });
    console.log(geometry)
    // material.wireframe = true; // Display wireframe
    const cube = new THREE.Mesh(geometry, material);
    cube.material.wireframe = true; // Display wireframe
    scene.add(cube);

    // Add border
    // const edges = new THREE.EdgesGeometry(geometry);
    // const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }); // Black outline
    // const wireframe = new THREE.LineSegments(edges, lineMaterial);
    // scene.add(wireframe);

    camera.position.z = 8;

    const rotateCube = () => {
      gsap.to(cube.rotation, {
        x: cube.rotation.x + Math.PI * 2,
        y: cube.rotation.y + Math.PI * 2,
        duration: 2,
        ease: "power1.inOut",
      });

      gsap.to(wireframe.rotation, {
        x: wireframe.rotation.x + Math.PI * 2,
        y: wireframe.rotation.y + Math.PI * 2,
        duration: 2,
        ease: "power1.inOut",
      });

      gsap.to(cube.material.color, {
        newColor:Math.floor(Math.random() * 16777215).toString(16), // Generate random hex color
        
        duration: 2,
        ease: "power1.inOut",
      });

      // Animate the color change using GSAP
      const newColor = Math.floor(Math.random() * 16777215).toString(16); // Generate random color

      gsap.to(cube.material.color, {
        r: parseInt(newColor.substring(0, 2), 16) / 255, // Convert hex to normalized RGB
        g: parseInt(newColor.substring(2, 4), 16) / 255,
        b: parseInt(newColor.substring(4, 6), 16) / 255,
        duration: 1, // Animation duration
        ease: "power1.inOut",
      });
    };

    document.addEventListener("click", rotateCube);

    // Render the scene
    const animate = () => {
      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    // Cleanup on component unmount
    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
      document.removeEventListener("click", rotateCube); // Remove event listener to avoid memory leaks
    };
  }, []);

  return <div></div>;
};

export default Page1;
