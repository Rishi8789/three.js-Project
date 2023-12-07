// Lamp.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Lamp = ({ isOn }) => {
  const lampRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    lampRef.current.appendChild(renderer.domElement);

    const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 5, 32);
    const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: isOn ? 0xFFFF00 : 0x999999 });

    const cylinder = new THREE.Mesh(cylinderGeometry, material);
    const sphere = new THREE.Mesh(sphereGeometry, material);

    scene.add(cylinder);
    scene.add(sphere);

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);

      // Add any animations or scene updates here based on the lamp state

      renderer.render(scene, camera);
    };

    animate();

    // Handle clean-up
    return () => {
      renderer.dispose();
    };
  }, [isOn]);

  return <div ref={lampRef} />;
};

export default Lamp;
